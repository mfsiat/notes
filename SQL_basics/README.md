# Sql Practice
## Basic Select
![](sqlStation.jpg)

1. Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.
```sql
select distinct city from station where mod(station.id,2)=0;
```

2. Let N be the number of CITY entries in STATION, and let N' be the number of distinct CITY names in STATION; query the value of N-N' from STATION. In other words, find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
```sql
select (count(city) - count(distinct city)) from station;
```

