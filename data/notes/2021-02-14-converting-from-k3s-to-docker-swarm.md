---
title: Converting from K3s to Docker Swarm
date: '2021-02-14'
tags: ['devops', 'docker']
draft: false
summary: Sometimes, it's nice to scale down the homelab to something a little simpler.
---

After an irrecoverable k3s failure on my pi cluster, I've chosen to simplify
to a basic docker swarm cluster today. I learned what I wanted - and the level of
debugging required to sort out why my servers wouldn’t come up was a little too
much like my day job, and not enough of an experimental sandbox.

You just don't need 7 containers to orchestrate a deployments to a pi cluster.

## Tearing down k3s from k3sup

As automated as the`k3sup` tool is, teardown is a process left to be discovered.

There's two scripts - one on master, and one for agents It's
To tear down kubernetes, `k3sup` comes with a few built in scripts.cripts. They're

On master

/usr/local/bin/k3s-uninstall.sh

```bash
/usr/local/bin/k3s-uninstall.sh

```

Feb 11th - Dependency Confusion
eah - we thankfully set up our NPM registries to avoid this. (also, I wrote the auth layer for our registry.)
All private scopes were also registered publicly, with no packages, So attempting to install private packages from the public registry just fails.
All attempts to install/publish unscoped packages from a private registry are rejected.

Feb 10th - Reverse Engineer a container

History API for docker to recreate layer

Had to figure out how to reverse engineer a container to a dockerfile today. Dive is a snazzy little tool that lets you explore docker layers.
https://github.com/wagoodman/dive

January 8th
I’ve never been an inbox zero kind of person, because I hate manually archiving/deleting emails - I shouldn’t have to do it. I also hate gmail’s UI for multiple views, tabs, inboxes, etc. However I organize my email should work on every email client I use - and google’s experiments just don’t make it to the phone app.

…So, I have a bunch of gmail filters that label/archive/organize emails as they come in.
Most of my filters automatically mark things as read and shove them away for reference. But a feature I wanted was to have certain emails, like order confirmations) still notify me, and then get cleaned up quickly after that. Or, if I don’t have any rules but I’ve read the message? Just clean up the cruft after a while. I don’t need to manually organize everything.

Ultimately, my inbox should be a list of unread, actionable messages.
Google app scripts lets you call the gmail api - so I wrote a little script to do just that. Anything that I’ve read that’s older than 10 days is cleaned up. Any email I want to get notified about (for right now, just order confirmations) is cleaned up after 24 hours.
https://github.com/matthewoden/autoarchiver

Gmailctl is a handy tool for managing a pile of filters.

The rest is just transactional emails that need to get wrangled.

Plus, simplify to clean up the gmail UI

January 12th

I know there's not a lot of mac folks in here (actually, are there any besides me?) but screenotate.com is a wonderful tool. Not free - but having OCR on all your screenshots, so you have searchable, annotated results? Super nice.

Especially with the number of video calls/meetings I have - I've been screencapping when folks share their screen so I can grab a url, or text off a slide or whatever's being shared without interrupting anyone.

Janyart 26th

Started using Bear for notes, and I'm a big, big fan. I love the hybrid markdown approach, where it keeps the markdown syntax, but also applies the formatting. e.g. _Some bold text_ and /some italic text/

Also, little things like tagging, instead of folders. And any note that uses checkboxes (that aren't all checked) showing up in a "TODO" section. Like many of the tools I use, it's mac only.

January 27th
https://espanso.org/

espanso
Home
An Open Source, Cross-platform Text Expander written in Rust.

Matthew Potter 8:22 PM
One of the things I immediately installed was the one that fixes the most commonly misspelled words, because I no word good
