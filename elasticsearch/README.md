# Notes on Elasticsearch

> Some helpful topic on Elasticsearch

## Scroll API

- If we need to get more than 10K data from elasticsearch index then we could use the scroll api to get all those data by paginated way.

```
POST <index_name>/_search?scroll=1m
{
  "query": {
    "match_all": {}
  }
}

GET _search/scroll
{
  "scroll_id": "<scroll_id>",
  "scroll": "1m"
}
```
