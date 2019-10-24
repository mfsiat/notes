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

3. Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.

```sql
select * from(select distinct city,length(city) from station order by length(city) asc,city asc) where rownum=1 union select * from(select distinct city,length(city) from station order by length(city) desc,city desc) where rownum=1;
```

4. Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

```sql
SELECT DISTINCT CITY FROM STATION WHERE lower(substr(CITY,1,1)) in ('a','e','i','o','u') ;
```

5. Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.

```sql
SELECT DISTINCT CITY FROM STATION WHERE lower(substr(CITY,-1,1)) in ('a','e','i','o','u');
```

6. Query all whose first and last name starts and ends with a vowel.

```sql
SELECT DISTINCT CITY FROM STATION WHERE lower(substr(CITY,1,1)) in ('a','e','i','o','u') and lower(substr(CITY,-1,1)) in ('a','e','i','o','u') ;
```

7. Query the list of CITY names that does not start and end with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

```sql
SELECT DISTINCT CITY FROM STATION WHERE lower(substr(CITY,1,1)) not in ('a','e','i','o','u') and lower(substr(CITY,-1,1)) not in ('a','e','i','o','u') ;
```

8. Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

```sql
SELECT DISTINCT CITY FROM STATION WHERE lower(substr(CITY,1,1)) not in ('a','e','i','o','u') or lower(substr(CITY,-1,1)) not in ('a','e','i','o','u') ;
```

9. Query the Name of any student in STUDENTS who scored higher than Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

**_Important Note:: we can use SUBSTR(str, pos, len) for selecting charater length and position_**

```sql
select name from students where marks > 75 order by substr(name, -3,3), id;
```