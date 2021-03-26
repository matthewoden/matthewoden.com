---
title: "Node isn't where you do work."
date: '2017-09-02'
summary: 'Push work to other systems, and let node coordinate your flow.'
tags: ['node', 'architecture']
---

The other day in the [STL #Node slack channel](https://stl-tech.slack.com/messages/C0VTQRYEA/), a user
asked how to join two JSON payloads together. They queried a list of inventories (which had
users), and a list of users (who were attached to inventories), and wanted
to know the best way to combine them in Javascript.

I quickly threw together a method for zipping/reducing across collections<a href="#1"><sup>1</sup></a>, but
also warned them about breaking the _Golden Rule of Node_:

> **Don't _do_ work in node. _Describe_ work in node.**

## _Doing_ work is data manipulation

Node servers are, for the most part, single-threaded applications. They
depend heavily on non-blocking I/O for performance. Every time you rework data
as part of your server's response, you're hold up the queue of incoming requests.

Of course, it's possible to spin up [child processes](https://nodejs.org/api/child_process.html)
and delegate this work to another thread. But [sending data back and forth over IPC is slow](https://github.com/nodejs/node/issues/3145),
and requires serializing/unserializing on each process, which blocks both threads
during that time. It would seem that this kind of delegation just
creates more work.<a href="#2"><sup>2</sup></a>

## _Describing_ work is message-passing

Node shines as a message broker, transforming small requests into streaming
replies. Think of your node app as a middle-manager, gathering requirements,
handling bad requests, and delegating responsibility.

### Practices and patterns for describing work:

- Avoid formatting the incoming request. Clients should pass in data exactly as
  you need it.

- Get your data from the database exactly as your client expects it.
  If you need the data sorted, make that part of the query. If you need it
  aliased, and grouped? Do it in the query. Your database is always going to be
  faster at organizing data than your server.

- Leave database responses as they are. If you've asked for exactly what you
  need, there's no point in mapping, filtering, or sorting the results.

- Use static, parameterized queries whenever possible. Custom string-building/
  query-building is just more logic to keep track of, and more work to be done
  on every call.

- If you don't have any say over the format of the data (maybe you're
  calling another API), then minimize the work you have to do. Use streams and
  sequences to manipulate the data as it arrives, rather than all at once.

In short, a valid request from the client should map to a static, parameterized
query. The database's response should be attach onto a parameterized reply.
Outside of basic validation, your server shouldn't ever care about the
data passing through it.

---

<small>
<a id="1"></a>
<sup>1</sup> Regardless of whether or not something's a good idea, sometimes
you just need to get things done.

<a id="2"></a>
<sup>2</sup> This is part of why scaling out a Node service is typically done
by spinning up more servers to run in parallel, rather than a using a single
server that manages multiple threads.
</small>
