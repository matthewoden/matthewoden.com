---
title: Setting up Erlang and Elixir from precompiled binaries.
date: '2016-04-14'
tags: ['elixir']
summary: Skip the build step, and jump straight into development.
---

Itching to write Elixir? Are you not allowed, or don't want to use homebrew? Too lazy to compile from source? Here's step-by step instructions to get Elixir and Erlang up and running on your mac, using the precompiled binaries.

## Setting up Erlang

1. Download a precompiled version of Erlang from [here](https://www.erlang-solutions.com/resources/download.html).
1. Run that thing.
1. When complete, type `erl` in your terminal to test that erlang has been appropriately added to your path.

## Setting up Elixir

1. Download the precompiled zip from latest, unzip, rename the folder to elixir.
1. Move the elixir folder to `usr/local/`: `mv ~/downloads/elixir usr/local/` (or... just copy and paste)
1. Add the elixir binary to your path: `echo 'export PATH="/usr/local/elixir/bin:$PATH"' >> ~/.bash_profile`
1. Update your terminal session with the latest bindings `. ~/.bash_profile`
1. test by typing `elixir` in your terminal.

And that's it! Happy coding!

(Tested on OS X El Capitan)

> _Note: This post was migrated from a gist. https://gist.github.com/matthewoden/a713412f4c7447cfeb2e2c06864686e2_
