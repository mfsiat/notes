# Setup EC2 with apache and MySql
> How to setup amazon linux 2 with apache and mysql

## Installed httpd mariadb and etc 
```bash
amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2

yum install -y httpd mariadb-server
```bash

## Start httpd
- **`systemctl start httpd`**

## Start on systemboot 
- **`systemctl enable httpd`**

## Check to see whether enable or not 
- **`systemctl is-enabled httpd`**

## Add your user (in this case, ec2-user) to the apache group.
- **`sudo usermod -a -G apache ec2-user`**

## Change the group ownership of /var/www and its contents to the apache group
- **`chown -R ec2-user:apache /var/www`**

## To add group write permissions and to set the group ID on future subdirectories, change the directory permissions of /var/www and its subdirectories
- **`chmod 2775 /var/www && find /var/www -type d -exec sudo chmod 2775 {} \;`**

## To add group write permissions, recursively change the file permissions of /var/www and its subdirectories
- **`find /var/www -type f -exec sudo chmod 0664 {} \;`**

## View the version of aws linux ami 
- **`cat /etc/system-release`**


