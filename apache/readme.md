# Apache 

## Force Http Redirection 

- Follow the below configuration file 
```
  <VirtualHost _default_:80>
    DocumentRoot "/opt/bitnami/apache2/htdocs"
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteCond %{HTTP_HOST} !^(localhost|127.0.0.1)
    RewriteRule ^/(.*) https://%{SERVER_NAME}/$1 [R,L]
    ...
  </VirtualHost>
```

```
  <VirtualHost _default_:80>
    DocumentRoot "/opt/bitnami/apache2/htdocs"
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteCond %{HTTP_HOST} !^(localhost|127.0.0.1)
    RewriteRule ^/(.*) https://%{SERVER_NAME}/$1 [R,L]
    ...
  </VirtualHost>
```

- For php-fpm https://docs.bitnami.com/bch/apps/wordpress/administration/enable-phpfpm/ 
