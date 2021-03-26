---
title: Common problems when using NPM Enterprise.
date: '2017-08-15'
tags: ['node', 'config']
summary: 'A better developer experience when using private registries'
draft: false
---

Using a private registry like NPM Enterprise (NPM E) is a great way to
share proprietary code across a large development team. Developers can install, find, and
publish private modules, using the same basic `npm` CLI they're used to.

Sadly, NPM's error output is often misleading about the actual underlying problem,
and having two registries can often lead to further misdirection.

The following is a quick guide to handling some of the more common and frustrating issues.

## A quick definition of terms

Most of the issues involve adjusting your `.npmrc` files or using module
[scopes](https://docs.npmjs.com/misc/scope). If you don't know about either of
these, read on. Otherwise, feel free to skip down to troubleshooting.

### What is an `.npmrc` file?

The `.npmrc` (or sometimes just `npmrc`) file is a configuration file for npm.
It's effectively a key-value store, and it's location determines it's scope of
control over npm modules.

You can configure it...

- in config file that comes with npm: `/path/to/npm/npmrc`
- globally on this machine: `$PREFIX/etc/npmrc`
- for the current user: `~/.npmrc`
- on a per project-basis project: `/path/to/my/project/.npmrc`

Configuration options are resolved in order of priority. The project-level
configuration overrides the user's settings, and the user's settings override
the global machine settings, and so on.

For local development, I only ever update the configuration in
my home directory, and in the project directory. Only your test/build
server should ever really be concerned about configuring any other `npmrc` file.

Full details on configuring npmrc files can be found [here](https://docs.npmjs.com/files/npmrc).

### Why use a scope?

If you're using a private registry, it's a good practice to group your proprietary
modules under at least one scope. Using a scope helps signal which modules are
private, and also allows for more granular configuration in your `npmrc` files.

Read more about module scopes [here](https://docs.npmjs.com/misc/scope)

I'll go over how these work together in the examples below.

---

## Troubleshooting installs

Generally, install issues boil down to pointing to the right registry,
for the right scope.

### When npm can't find an open-source library that you know exists:

```bash
# example error output
No matching version found for some-library@x.x.x
```

One of the benefits of NPM E is that it can be installed on whatever
server you like, including on-premise. When mirroring packages, this can often
lead to faster installs and builds.

The downside to this is that after your team mirrors enough packages, your NPM E
instance can start falling out of sync with the main registry.

#### Solutions

1.  If you're the one running ops on your registry,
    [The NPM CLI on the server can](https://npme.npmjs.com/docs/troubleshooting/replication.html)
    to get your modules back in sync.

1.  If you don't have access to your NPM E instance, then I'd suggest pointing to
    https://registry.npmjs.org/ as your main registry, and falling back to
    your private registery for your scoped modules.

        Here's an example `npmrc` file with this kind of pass-through configuration:

```bash
# Example Environment Setup:
registry=https://registry.npmjs.org/
@yourscope:registry=https://your.registry
//your.registry/:_authToken {your access token goes here}
```

### When npm can't find an scoped/private library that you know exists:

```bash
# example error output
404 finding @yourscope/some-library
```

By default, NPM E checks authorization and ownership on all scoped modules.
If you're using a scope, this can lead to some false positives on missing
modules.

#### Solutions

Only point your scope at your private registry, and point all
other modules at the main registry.

1.  Set the scope globally for your user.

```bash
npm config set registry https://registry.npmjs.org
npm config set @scoped:registry https://your.registry
npm config set //your.registry/:_authToken {your token}
```

1.  Set the scope for just one project, by adding a npmrc at the root.

    ```bash
    # .npmrc file in the root of your project
    registry=https://registry.npmjs.org
    @yourscope:registry=https://your.registry
    ```

    **Never** put your personal auth token in as part of your source code.
    Instead, set your auth token as part of your user configuration.

    ```bash
    npm config set //your.registry/:_authToken {your token}
    ```

---

## Troubleshooting Publishing

Like installing, scopes are the main cause of publishing problems, but
package.json configuration can also be an issue, especially with private
and proprietary code.

### Publishing a module returns a 404.

```bash
# example error output
404 finding @yourscope/some-library
```

Publishing often has the least helpful error outputs, and most problems return
an unhelpful 404 error, rather than the real problem.

#### Solutions

1. Your module's scope is pointed at the wrong registry. Update your user's `.npmrc` file
   with the appropriate scopes and tokens.

```bash
npm config set @scoped:registry https://your.registry
npm config set //your.registry/:_authToken {your token}
```

1. Your module's `package.json` has a respository field, but you haven't set a
   value for the url.
1. Your module's `package.json` is completely filled out, but your pointing
   to a private git repository. Your git repo doesn't have to be public to the
   world, but it does have to be public to the registry.

---

That should cover most of the frustrating errors. If you've come across other
stumbling blocks, let me know!
