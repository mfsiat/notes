# MongoDB

> docs on mongodb

## Backup & Restore

- To **Backup** a mongo db we can use **mongodump** command like the following **`mongodump -d 'name_of_database' -o 'name_of_folder_or_directory'`**
- Here use different tags to specify different works.
- To **Restore** DB use **mongorestore** command like the below
  **`mongorestore -d 'db_name' 'specify_db_path'`**

- Export mongo db data into csv file

```bash
mongoexport --db=johukumdb --collection=johukum_mobilenumberdata --type=csv --fields=name,designation,address,store_name,numbers,categories --out=mobilenumbers.csv
```

- Export data into csv file with specific fields.
```bash
mongoexport --db=johukumdb --collection=johukum_businessinfo --type=csv --fields=location[0],contact --out=businessinfo.csv

mongoexport --db=johukumdb --collection=johukum_businessinfo --type=csv --fields=location.business_name,contact.title,contact.name,contact.email,contact.mobile_no,contact.landline_no,contact.fax_no,contact.website --out=jo-businessinfo.csv
```

## Add password Protection on MongoDB Database 

- To add the password first enter mongo & create a admin user who can watch everything 
```
db.createUser(
  {
    user: "admin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
```
- Now you can create DB users with specific db permission
- Enter mongo shell, select db admin than create the users
```
db.createUser(
  {
    user: "myNormalUser",
    pwd: "xyz123",
    roles: [ { role: "readWrite", db: "some_db" },
             { role: "read", db: "some_other_db" } ]
  }
)
```

