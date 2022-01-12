---
title: "Rails Guide"
excerpt: "This is an excerpt for rails guides"
---

# Some snippets from the Rails Guides whoops I am typing wrong

Here are some code snippets and text from [the markdown files that are used to build the Rails Guides](https://github.com/rails/rails/blob/main/guides/source/active_job_basics.md).

Here's what a job looks like:

```ruby
class GuestsCleanupJob < ApplicationJob
  queue_as :default

  def perform(*guests)
    # Do something later
  end
end
```

```js
console.log('hello world')
```

Note that you can define `perform` with as many arguments as you want.

### Enqueue the Job

Enqueue a job using `perform_later` and, optionally, `set`. Like so:

```ruby
# Enqueue a job to be performed as soon as the queuing system is
# free.
GuestsCleanupJob.perform_later guest
```

```ruby
# Enqueue a job to be performed tomorrow at noon.
GuestsCleanupJob.set(wait_until: Date.tomorrow.noon).perform_later(guest)
```

```ruby
# Enqueue a job to be performed 1 week from now.
GuestsCleanupJob.set(wait: 1.week).perform_later(guest)
```


