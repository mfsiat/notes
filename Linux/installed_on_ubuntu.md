# Installed Stuffs on my Ubuntu

> docs on installed softwares

## Editors

- VS code
- Sublime Text

## Frameworks and Servers

- apache2 > deleted
- mysql
- nodejs
- laravel
- zsh Shell
- xampp
- react
- vue/cli

## Package Manager & Version control

- npm
- Git

## Extra for Ubuntu

- lightdm (ubuntu display manager)
- nvidia control panel (nvidia x server display driver)
- synaptic package manager
- dconf editor
- gnome tweak tools
- dropbox
- tilix
- updated react-scripts directories for react scripts permission
- **Postman**
- added mysql password ( Logic1.92 )
- binwalk (tool for analyzing, reverse engineering, and extracting firmware images)
```bash
sudo mysql -u root -p
password: Logic1.92
```

## Usage

> how to do things

- To start/stop apache2

```bash
systemctl start apache2

systemctl stop apache2
```

- To view enabled/disabled services

```bash
systemctl list-unit-files | grep enabled

systemctl list-unit-files | grep disabled
```

- To enable/disable a service

```bash
sudo systemctl enable apache2

sudo systemctl disable apache2
```

- To view display manager

```bash
systemctl status display-manager
```

## Create a virtual host for xampp or lamp

- First redirect to **`/opt/lampp/etc`**

- Then open **`httpd.conf`** file and comment out the virtual host option.

```bash
# Virtual Host
Include etc/extra/httpd-vhosts.conf
```

- Then go to **`/opt/lampp/etc/extra`** and open **`httpd-vhosts.conf`**

- Add as your desired virtual host name using

```bash
<VirtualHost *:80>
	DocumentRoot "/opt/lampp/htdocs/testsite"
	ServerName testsite.local
</VirtualHost>
```

- Open terminal and write.

```bash
sudo nano /etc/hosts
```

- Add at the bottom or at the end.

```bash
127.0.0.1 testsite.local
```

- Your virtual host is ready.

## For apache2 or httpd

- The overall folder structure should be like this, for every app we need to define them and add them as `example.com`, `example1.com` or `example2.com`.

```bash
/var/www/
├── example.com
│   └── public_html
├── example-1.com
│   └── public_html
├── example-2.com
│   └── public_html
```

- Permissions needed to be set up, make apache as the owner of the app.

```bash
sudo chown -R apache: /var/www/example.com
```

- For those who are using **`apache2`** or **`httpd`** they need to add a little bit extra for virtual host.

```bash
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /var/www/example.com/public_html

    <Directory /var/www/example.com/public_html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
    </Directory>

    ErrorLog /var/log/httpd/example.com-error.log
    CustomLog /var/log/httpd/example.com-access.log combined
</VirtualHost>
```

- Test the syntax of the configuration files.

```bash
sudo apachectl configtest
```

- To restart

```bash
sudo systemctl restart httpd
```

### Syntax of the virtual host

- `ServerName`: The domain that should match for this virtual host configuration. This should be your domain name.
- `ServerAlias`: All other domains that should match for this virtual host as well, such as the www subdomain.
- `DocumentRoot`: The directory from which Apache will serve the domain files.
- `Options`: This directive controls which server features are available in a specific directory.
- `Indexes`: Prevents directory listings.
- `FollowSymLinks`: This option tells your web server to follow the symbolic links.
- `AllowOverride`: Specifies which directives declared in the `.htaccess` file can override the configuration directives.
  `ErrorLog CustomLog`: Specifies the location for log files.
