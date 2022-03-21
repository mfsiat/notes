# Metabase 
> A free analytical tool

## Setup Metabase 

- Setup metabase using docker 
```
docker run -d -p 4000:3000 \
  -v /jc-data:/metabase-data \
  -e "JAVA_TIMEZONE=Asia/Dhaka" \
  -e "MB_DB_FILE=/metabase-data/metabase.db" \
  --restart unless-stopped \
  --name metabase metabase/metabase
```
