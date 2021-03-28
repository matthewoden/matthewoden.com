---
title: NPM and Dependency Confusion
date: '2021-02-11'
tags: ['npm', 'security']
draft: false
summary: A little policy to ensure that your teams are kept safe and sound.
---

You may have recently read about the exploits around [dependency confusion](https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610).

I manage our NPM Repository at work. I was already aware of this particular issue
with NPM scopes, and had prepared our development teams to handle this kind of
exploit. The policy I implemented can be found below.

- All internal projects must use a lockfile.
  - All new development will generate a lockfile anyway.
  - Legacy projects should be updated prior to any new feature work.
- All internal packages must use a scope.
  - Attempts to install/publish packages without a scope should be rejected.
- All internal project scopes must also be registered on public registries.
  - The easiest way to ensure this is to lock down scope generation.
- No packages can use internal scopes for open source projects. Different registries should always use different scopes.
  - This is just a good practice with NPM in general, since a package can only use one registry per scope.
