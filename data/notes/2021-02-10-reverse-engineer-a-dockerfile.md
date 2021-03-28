---
title: Reverse Engineering a Docker Container into a Dockerfile
date: '2021-02-10'
tags: ['devops', 'docker']
draft: false
summary: When you inherit projects, not everything is documented, including container contents. Don't panic! There's still hope.
---

If you're like me, then at some point you'll inherit a project without documentation.
On one such project, we inherited a project that used build tools shoveled into a container
as part of it's CI pipeline. The codebase was no longer compatible with the image, and
anyone who knew how it was set up was long gone.

We were faced with two options - recreate the build from scratch, or try and
recreate the dockerfile to update the image. I decided to start with the latter.

Docker provides a [history](https://docs.docker.com/engine/reference/commandline/history/)
command as part of the CLI. That roughly explains what commands, and what tool were used
used to generate each layer. Converting that output to a file can be a bit of slog.
Plus, `COPY`, or `ADD` commands only really return the file directory and checksum
of the files. The final container isn't very useful at that point - while you
can try exploring the files in the final artifact, each additional layer may have
changed, removed, or manipulated those files.

To handle the bulk of the conversion, I reached for [dockerfile-from-image](https://hub.docker.com/r/dduvnjak/dockerfile-from-image/), which alone should get you 90% of the way there. It can
generate a dockerfile from any local image, and does so by traversing the image
tree until the first tagged image is found. But, like the history API - `COPY`,
or `ADD` commands won't be recreated.

To fill this gap, the second tool I'd recommend is [Dive](https://github.com/wagoodman/dive).
It's a snazzy little CLI that lets you explore explore the history of an image,
alongside a diff of the filesystem at each layer, and the image id. This tell you
exactly what files are required at every step, and where to find them.

As long as you use these two tools, no container should ever remain a mystery.
