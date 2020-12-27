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

