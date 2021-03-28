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

Below, you'll find my current script. Feel free to use it to create something similar.

```js
function gmailAutoArchive() {
  const clearThreads = (query) => {
    const threads = GmailApp.search(query)

    Logger.log('Found ' + threads.length + ' threads:')

    threads.forEach((thread, i) => {
      Logger.log(i + 1 + '. ' + thread.getFirstMessageSubject())
      thread.markRead()
    })

    const batchSize = 100
    while (threads.length) {
      GmailApp.moveThreadsToArchive(
        threads.splice(0, Math.min(threads.length, batchSize))
      )
    }
  }

  const queries = [
    // Remove anything read that's over 10 days old.
    'in:inbox label:read AND older_than:5d',
    // any order confirmation that's over one day can get archived.
    'in:inbox (label:orders-order-confirmation' +
      ' OR ' +
      'label:orders-shipping) AND older_than:5h',
    // any unread emails older than a month probably aren't going to be read.
    'in:inbox label:unread AND older_than:14d',
  ]

  queries.forEach(clearThreads)
}
```

In the future, I think I'll also use this approach to silently recieve emails. I subscribe to a number of newsletters, but these are longer reads. I set aside times for these at the end of the day. So, I can archive them immediately, skipping the notification process - then unarchive them shortly after.

> Note: When creating your script - be sure to use the _default_ project. If you change the project number, you can never revert it, and you'll no longer have automatically refreshing auth tokens.
