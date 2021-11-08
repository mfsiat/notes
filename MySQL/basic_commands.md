# Database command
> basic commands

- To login
> mysql -u root

- To create database
> create database database_name;

- To view the database
> show databases;

- To select a db
> use database_name;

- To view a table
> show tables;

## DB Administering
> create user, set password & assign specific tables

- To create a db user 
```
> create user 'username'@'localhost' identified by 'password';
```
- To set a password
```
> set password for 'username'@'localhost' = password;
```
- To assign a table with all access 
```
> grant all on database_name.* to 'username'@'localhost';
```
- To assign a table with specific access
```
> grant select on database_name.table_name to 'username'@'localhost';
```