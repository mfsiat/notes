# Docker Tutorial

> Simple docker tutorial

## Basics

- Containers, Images
- Containers are the applications
- Images are the services that we are using

## Add docker to your local groups

> It prevents docker to run without sudo

- Command: **`sudo usermod -a -G docker ec2-user`**

## Create a Container

- To create a container run : **`docker container run -d -p 80:80 --name myapp nginx`**

- **-d** stands for detached it means run it on the background
- **-p** stands for **Port Number**

## To Configure Database containers

- Please read the documentation on docker hub
- To run a mysql container run :
  **`docker container run -d -p 3306:3306 --name testmysql mysql --env MYSQL_ROOT_PASSWORD=123456`**

## View Stop Remove Containers

- Command to view: **`docker ps`** or **`docker container ls -a`**
- Command to view images or services that are downloaded: **`docker images ls`**
- Command to stop: **`docker stop container_name`**
- Command to remove: **`docker rm container_name`**

## To enter into container

- Command to enter container: **`docker exec -it myapp bash`**

## Bind Project Directory with you container

- Command to bind directory:
  **`docker container run -d -p 80:80 -v $(pwd):/usr/share/nginx/html`**

- This helps to serve files on your machine by the help of your container service.

- Make sure to check the permissions on the mounted volume

- We can also use the **--mount** tag to mount the volume or file

## Create an Image file from Dockerfile

- First create the docker file like as below

```bash
FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY . .
```

- To build from images command: **`docker container run -d -p 80:80 mfsiat/nginx-test`**

- To push to docker hub
  first login: **`docker login`**
  Second push: **`docker push image_name`**
