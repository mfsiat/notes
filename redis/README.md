# Redis Crash Course

> Doc on redis

## What is It?

- Open source in-memory data structure store which can be used as a database and/or a cache and message broker.

- NoSQL key/Value store.

- Supports multiple data structure.

- Built in replication.

## Redis Datatype

- String, lists, sets, sorted sets, hashes.

- Bitmaps, Hyperlogs, Geospatial indexes _(Based on strings)_

## Advantages

- flexible

- no schemas & column names

- very fast

- rich datatype support

- caching & disk persistence

## Commands

- enter redis `redis-cli`

- test to see connection is still alive `ping`

- check to see something exists `exists`

- to remove all `flushall`

- to set something `set server:name servername`

- to get that server info `get server:name`

- some extra

```bash

set server:name servername
set server:port 8000
get server:port
set greeting 'Hello World'
expire greeting 50 >> expires after 50 seconds
ttl greeting >> shows the countdown

# remove expiring
persist key

# set expiring with value
setex greet 50 'hello world'

# to show the timing
ttl greet

# push data into a list
lpush people 'name'

# to get all the data from the list
lrange people 0 -1

# to push into the bottom
rpush people 'name'

# length of the list
llen people

# pop from the list
lpop people
```
