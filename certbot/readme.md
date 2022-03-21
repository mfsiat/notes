# Certbot 
> Configure SSL with Certbot

## Info 

- Documentation link: [Click Here](https://certbot.eff.org/instructions)

## Setup Certbot

- You need to have python installed.
- You can also setup certbot using pip.
- Setup on ubuntu for nginx: **`sudo apt install certbot python3-certbot-nginx`**
- Setup on ubuntu for apache: **`sudo apt install certbot python3-certbot-apache`**
- To run certbot type: **`sudo certbot --nginx`** for nginx and for apache2: **`sudo certbot --apache`**
- To run certbot without providing email type: **`sudo certbot --nginx -d example.com --register-unsafely-without-email`**
