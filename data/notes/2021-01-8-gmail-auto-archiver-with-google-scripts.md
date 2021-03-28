---
title: Post-Processing Gmail
date: '2021-02-14'
tags: ['devops', 'docker']
draft: false
summary: Automate your way to inbox-zero with google apps-scripts
---

For my inbox, I use [gmailctl](https://github.com/mbrt/gmailctl) to create and manage all of my filters. The majority of my rules are simply a combination of labeling, marking them as read, and archiving. I'd wager that 90% of my emails are simply references and reciepts. Nothing that needs to interrupt my day.

Pre-processing emails is great, but that's not really enough to keep my inbox clean. The killer feature I want for email is _post-processing_. Why don't we have hooks for after I've read a message? What if I want to be notified about an email, but not have it clutter up my inbox? What if I don't want to be notified, but still want to check on messages later?

Google doesn't have any out-of-the-box answers for this, but there is a solution: the apps-scripts lets you call the gmail api, and you can run scripts on an interval. So I wrote a little script to periodically do just that. Anything I’ve read that’s older than 10 days is archived. Any email I want to get notified about (for right now, just order confirmations) goes to my inbox first, and checked on later.

If you'd like to do the same, you can find my script [here](https://github.com/matthewoden/autoarchiver).

In the future, I think I'll also use this approach to silently recieve emails. Some email, like newsletters, are longer reads that I don't bother reading until a set time at the end of the day. I can archive them immediately, and then unarchive them shortly after. This skips the notification process, but still keeps my inbox clean.
