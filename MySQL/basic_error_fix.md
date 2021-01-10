# Some Errors found on MySql and How to solve them
> How to fix those problems

## Error on authenticating or error on root@localhost

- This error appears when we have no password on db and our app is making connection with password on it. 
- To solve this we need to add password on our db. 
- Login to mysql and create a password. 
- Codes 
```bash
# 1
sudo mysql

#2
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'insert_password';

#login using the new added password
mysql -u root -p

```
