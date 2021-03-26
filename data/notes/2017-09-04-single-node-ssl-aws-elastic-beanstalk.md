---
title: Setting up SSL for a single-instance deploy on Elastic Beanstalk, with Docker
date: '2017-09-04'
tags: ['devops', 'docker']
draft: false
summary: A step by step guide to have https on your personal projects.
---

When I was developing [Gunshots or Fireworks](https://gunshotsorfireworks.com),
I decided to experiment with [AWS's Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
for deployment.

If you've never used Elastic Beanstalk before, it's an opinionated wrapper around
AWS CloudFormation. In exchange for the full freedom and control of AWS, you
get speed. The main focus is be around taking your application from running
locally to fully deployed in a matter of minutes. Which seemed perfect for a
little toy project like mine.

My project didn't have huge requirements - I only needed to run on a t2.nano.
The only tricky bit came from my use of the browser's Geolocation API, which meant
I needed my app served via HTTPS. That can be awkward for a single-container
environment. While setting up an Elastic Load Balancer would make HTTPS easy,
it'd easily triple my costs.

Elastic Beanstalk doesn't expect you to load-balance single-container
environments, though. Instead, they provide a pre-configured instance of nginx
on container itself. It's a nice little feature that keeps your app independent
of any proxy logic. When a small app needs to scale up, it's only a configuration
change, rather than a code change.

There's no UI option to configure nginx. Instead, each deployment must provide
[one or more `.ebextension` files](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html)
to handle container configuration. These files let you modify AWS Resources, run
bash scripts, grab dependancies from package managers, and more.

If you're not familiar with SSL, Nginx, or AWS, configuring your environment
could take a while. Below, you'll find the baseline configuration needed
to get up and running, along with an explanation of what's happening at each
step. Hopefully it'll save you a few hours of scrounging the docs.

## The plan: Set up HTTPS once, never think about it ever again.

Currently, this configuration does the following:

- Terminates TLS on the proxy, forwarding requests to port `80` on the docker
  application itself.
- Modifies your deployment environment to allows access to your deployment on
  port `443`.
- Automatically upgrades all requests to port `443` if they come in on port `80`
- Installs certbot on the container instance.
- handles initial certificate creation.
- schedules a daily certificate renewal check.

So let's get started! If you haven't already, create a `.ebextension` directory at the root of
your project. In that directory, create a new file called `https-instance.config`. We'll
be adding options to this file in parts. At each new step, add the options shown
to the end of the file.

## Step 1. Define AWS Resources

The first thing we need to make sure we can even accept HTTPS traffic. We
need the security group that's created with our environment to allow access
on port 443. This is the first and only CloudFormation rule of our configuration.

We'll set our port range from and to `443` which limits SSL ingress
to just that port. To apply it to our security group, we're using the `getAtt`
function to grab the GroupId "Attribute" off of the environment's security group.

```yaml
Resources:
  # configure our securty group for port 443.
  sslSecurityGroupIngress:
    Type: AWS::EC2::SecurityGroupIngress
    Properties:
      GroupId: { 'Fn::GetAtt': ['AWSEBSecurityGroup', 'GroupId'] }
      IpProtocol: tcp
      ToPort: 443
      FromPort: 443
      CidrIp: 0.0.0.0/0
```

> **Note:** If you're configuring a pre-existing deployment environment, you may also need to
> enable access to your security group on port `443` though the AWS console.

## Step 2. Configure Nginx

Next we'll be adding a few "files" outside of our application to configure
our nginx instance. First, let's set up a tiny little server that upgrades
traffic from HTTP to HTTPS.

```yaml
files:
  # redirect http to docker server.
  /etc/nginx/conf.d/http_custom_proxy.conf:
    mode: '000644'
    owner: root
    group: root
    content: |
      server {
        listen 80;
        return 301 https://$host$request_uri;
      }
```

Next, we'll add server configuration for handling TLS termination.
This file has all of our SSL options, the locations for our certificates, and
a proxy to our application.

```yaml
/etc/nginx/conf.d/https_custom.pre:
  mode: '000644'
  owner: root
  group: root
  content: |
    # HTTPS Server

    server {
      listen 443;
      server_name localhost;

      ssl on;

      ssl_certificate      /etc/letsencrypt/live/ebcert/fullchain.pem;
      ssl_certificate_key  /etc/letsencrypt/live/ebcert/privkey.pem;

      ssl_session_timeout 5m;

      ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
      ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
      ssl_prefer_server_ciphers on;

      location / {
        proxy_pass http://docker;
        proxy_http_version 1.1;

        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      }
    }
```

> Did you notice that the file extension is `.pre` on this file? We'll change that to
> the standard `.conf` once we've actually created the certificate files.

## Step 3. Container Configuration

By this point, we've opened up incoming traffic, and we're sending everything to
our app. All that's left is grab a few dependencies, and install certbot.

There are two options presented here - packages, and container commands. The
packages option lets us use a few existing package managers, and container
commands are individual bash scripts, run in alphabetical/numeric order.

We'll use the packages option to grab [EPEL](https://fedoraproject.org/wiki/EPEL)
which is required by certbot.

```yaml
packages:
  yum:
    epel-release: []
```

Then we kick off a series of container commands to install certbot, and handle
automatic renewal.

```yaml
container_commands:
  00_create_dir:
    command: 'mkdir -p /opt/certbot'
  10_installcertbot:
    command: 'wget https://dl.eff.org/certbot-auto  -O /opt/certbot/certbot-auto'
  20_permission:
    command: 'chmod a+x /opt/certbot/certbot-auto'
  30_getcert:
    command: 'sudo /opt/certbot/certbot-auto certonly --debug --non-interactive --email YOUR_EMAIL@YOUR_DOMAIN.com --agree-tos --standalone --domains YOUR_DOMAIN_HERE --keep-until-expiring --pre-hook "sudo initctl stop nginx" '
  40_link:
    command: 'ln -sf /etc/letsencrypt/live/YOUR_DOMAIN_HERE /etc/letsencrypt/live/ebcert'
  50_config:
    command: 'mv /etc/nginx/conf.d/https_custom.pre /etc/nginx/conf.d/https_custom.conf'
  60_restartnginx:
    command: 'sudo initctl restart nginx'
  70_setrenewal:
    command: '(crontab -l ; echo ''0 6 * * * root /opt/certbot/certbot-auto renew --standalone --pre-hook "service nginx stop" --post-hook "service nginx start" --force-renew'') | crontab -'
```

It seems like there's a lot going on here, but it's mostly just paths. Even so,
it might be a good idea to go over what's happening at each step:

- `00_create_dir` Create the working directory for certbot, if needed.
- `10_installcertbot` Download certbot to our newly created directory.
- `20_permission` Set certbot as executable.
- `30_getcert` Get our first cert, if needed. We're using the standalone option
  over the nginx plugin for stability.
  - Remember to change the email and domain lines!
- `40_link` Create a simlink between the our location of our certs, (which is
  domain specific) the live directory in our configuration (which is reusable).
- `50_config` Now that we have certs in the right directory, we can rename our
  ssl config from `.pre` to `.conf`.
- `60_restartnginx` Restart nginx to ensure that all of our options are set.
- `70_setrenewal` Lists out the current cronjobs, and adds on a new one for our
  certbot renewal. All of which gets joined together, and piped back into crontab.
  - Note that our new cron job does stop and start nginx during renewal.

And that's it! If you've been following along, you should have a single
configuration file that's fairly reusable, and ready for your next `eb deploy`.
If you have any questions, feel free to hit me up in the comments.
