# Docker Intro

> Docker Basics

- Download setup ile from docker hub.
- Need account for the download.
- docker built on the Go programming language.

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

### Commands

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


### Build Docker Container from Dockerfile

- To build image from a **Dockerfile** & tag it 
  > docker build -t image_name . 

- To run the build & tagged image 
  > docker run -dp 8000:8000 image_name

- To add 3rd party flag with docker 
  > docker run -dp 8000:8000 --cap-add ANY_TYPE_OF_FLAG image_name

- To add specific env file with the image and run it with docker-compose
  > docker-compose --env-file docker.env up -d