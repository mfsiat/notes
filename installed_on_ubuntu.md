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
- skypee( id: siat0071 pass: Halo.Kat )

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

## Create a virtual host for xampp

- First redirect to

  > /opt/lampp/etc

- Then open **httpd.conf** file and comment out the virtual host option.

  > # Virtual Host
  >
  > Include etc/extra/httpd-vhosts.conf

- Then go to /opt/lampp/etc/extra and open httpd-vhosts.conf

- Add as your desired virtual host name using

```shell
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
