# Redis Crash Course (REmote DIctionary Server)

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

## Network Security 

- Deny access to main redis port 

- Firewalled to prevent access 

- Loopback can be used

## Authentication 

- Tiny layer of authentication 

- Refuses all queries from unauthenticated users

## Data Encryption 

- Redis does not support encryption 

- if redis is open to www use additional protection layer

- SSL Proxy - Spiped

- **Its recomeneded to disabling and renaming commands 

- Specific commands can be disabled or renamed 

- Commands are renamed in redis.conf

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


## Articles Links 

- [A Step by Step guide for Redis cluster in AWS](https://medium.com/@kekayan/redis-on-aws-36ed7054357e)
- [Using Elasticache as redis as in memory key-value store](https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-redis.html)


## Trash 

```bash 
 AKIATFUNX4ATTLPXU343

 N1CHRgQ79Uy08aCm6v3t2huxN9SD5nG0iLkfrafQ
```
