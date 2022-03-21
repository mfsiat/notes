# Nginx 
> Notes for configuring nginx

## Run PHP Applications with NGINX

- php applications uses **`php-fpm`** service to run php scripts
- depending on the php version **fpm** states different
- like **php8.0-fpm**, **php7.4-fpm** etc
- add the following server block to run **php-fpm**
```
server {

    # . . . other code

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.0-fpm.sock;
    }
}
```
- different configurations needs different configs
```
location ~ \.php$ {
       fastcgi_split_path_info ^(.+\.php)(/.+)$;
       fastcgi_pass 0.0.0.0:5500;
       fastcgi_index index.php;
       include fastcgi_params;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       fastcgi_param PATH_INFO $fastcgi_path_info;
}
```

## For proxy pass use the following

- like following
```
location / {
	proxy_read_timeout 3600;
	proxy_connect_timeout 300;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
	proxy_http_version 1.1;
        proxy_pass http://0.0.0.0:8001;
}
```
- only **proxy_pass** can be enough

## Automatically generate Nginx Configs using DigitalOcean Tool

- This tools provides auto generation for nginx configs
- URL: [Click Here](https://www.digitalocean.com/community/tools/nginx)

## Catch real ip from user access

- This works behind load balancer and saves the ip in nginx access log
- Nginx can catch real ip under load balancer, this is risky but quite handful 
- ServerFault Link: [Click Here](https://serverfault.com/questions/331531/nginx-set-real-ip-from-aws-elb-load-balancer-address)
- Add the following config on main **`nginx.conf`**
```
	real_ip_header X-Forwarded-For;
	set_real_ip_from 10.10.0.0/16;
```
