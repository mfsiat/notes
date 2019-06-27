# Sql Practice
## Basic Select
![](sqlStation.jpg)

1. Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.
```sql
select distinct city from station where mod(station.id,2)=0;
```