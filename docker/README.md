# Docker Intro
> Docker Basics

## Setup Docker on ubuntu 20.04 lts
- Run the following commands
```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce
```

### Create container

```bash
docker container run -it -p 80:80 nginx
```

- 'docker container' a management command
- run sub command
- '-it' interactive mode ( for running on the foreground )
- '-p' publish
- '80:80' default port for our image:what is exposed from container
- 'nginx' the image we want to create

### Basic Commands

- To create a container

  > docker container run -it -p 'port num:port num' 'image name'

- To view all running containers

  > docker ps

- To view all the containers ( short method )

  > docker ps -a

- To view the complete statistics of running containers

  > docker stats

- To **Stop** a container

  > docker stop 'container ID'

- To view all the container

  > docker container ls -a

- To Delete a container

  > docker container rm 'container id'

- To view the downloaded images on our system

  > docker images

- To delete an image
  > docker image rm 'image id'

- Purging all unused or dangling images, containers, volumes and networks
  > docker system prune 

- Prune all 
  > docker system prune -a

## Docker Images

- List all images 
  > docker images -a 

- Remove docker image
  > docker rmi Image Image

- Remove all images 
  > docker rmi $(docker images -a -q)

### Removing Dangling images 
- List dangling images 
  > docker images -f dangling=true

- Remove them 
  > docker image prune

- Remove images according to patterns
  > docker images -a |  grep "pattern"
  > docker images -a | grep "pattern" | awk '{print $3}' | xargs docker rmi

## Removing Containers

- Remove 
  > docker rm ID_or_Name ID_or_Name

- Run and remove 
  > docker run --rm image_name

### Remove all exited containers

- List 
  > docker ps -a -f status=exited

- Remove 
  > docker rm $(docker ps -a -f status=exited -q)

### Remove containers using more than one filter

- List 
  > docker ps -a -f status=exited -f status=created

- Remove 
  > docker rm $(docker ps -a -f status=exited -f status=created -q)

### Remove containers according to a pattern

- List 
  > docker ps -a |  grep "pattern”

- Remove 
  > docker ps -a | grep "pattern" | awk '{print $1}' | xargs docker rm

### Stop and remove all containers 

- List 
  > docker ps -a 

- Remove 
  > docker stop $(docker ps -a -q)

  > docker rm $(docker ps -a -q)

## Removing Volumes 

- List 
  > docker volume ls

- Remove 
  > docker volume rm volume_name volume_name

### Remove dangling volumes 

- List 
  > docker volume ls -f dangling=true

- Remove 
  > docker volume prune

- Remove container and its volume 
  > docker rm -v container_name
### Build Docker Container from Dockerfile

- To build image from a **Dockerfile** & tag it 
  > docker build -t image_name . 

- To run the build & tagged image 
  > docker run -dp 8000:8000 image_name

- To add 3rd party flag with docker 
  > docker run -dp 8000:8000 --cap-add ANY_TYPE_OF_FLAG image_name

- To add specific env file with the image and run it with docker-compose
  > docker-compose --env-file docker.env up -d