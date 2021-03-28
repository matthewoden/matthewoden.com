---
title: Converting from Kubernetes to Docker Swarm
date: '2021-02-14'
tags: ['devops', 'homelab', 'kubernetes']
draft: false
summary: Sometimes, it's nice to scale down the homelab to something a little simpler.
---

After an irrecoverable k3s failure on my pi cluster, I've chosen to simplify my
homelab to a basic docker swarm cluster today. I learned what I wanted - and the
level of debugging required to sort out why my servers wouldn’t come up was a little too
much like my day job, and not enough of an experimental sandbox.

I just don't need 7 containers to orchestrate a deployments to a pi cluster.

## Tearing down k3s from k3sup

As automated as the`k3sup` tool is for setting up clusters, they didn't bother
to automate any teardown and cleanup. Fortunately, k3s includes scripts for these
as part of the install.

On the server node, you can run the following script:

```bash
/usr/local/bin/k3s-uninstall.sh
```

And on your agents nodes, the script name is slightly different:

```bash
/usr/local/bin/k3s-agent-uninstall.sh
```

And that's it! Kubernetes has been cleaned up, and your servers are ready for
whatever's next.
