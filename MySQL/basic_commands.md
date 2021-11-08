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
- Some notes 
```
 UPDATE mysql.user SET user='newusername',
 password=PASSWORD('newpassword') WHERE user='root';
 FLUSH PRIVILEGES;
```
```
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
GRANT SELECT ON *.* TO 'username'@'%';
```

- Some Docs
https://dev.mysql.com/doc/refman/5.7/en/grant.html
https://kodejava.org/how-to-create-a-read-only-mysql-user/
https://techleader.pro/a/388-Adding-a-read-only-MySQL-user
https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
https://www.mysqltutorial.org/mysql-drop-user/