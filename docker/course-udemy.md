## Commands

> Course taken by steffen grider

```
docker run = docker create + docker start

```

- **`docker start -a `**: Give the any output and print out the logs.

## Lifecycle

- docker create, start
- docker ps --all
- Create: **` docker create busybox echo hi`**
- List all the containers: **`docker ps --all`**
- Start: **`docker start`**
- Start and show output: **`docker start -a id`**
- You cannot start the same container while it is running.
- Remove all image containers and everything from docker: **`docker system prune`**
- Retrieve logs from docker containers: **`docker logs container_id`**
- Stopping Container: **`docker stop container_id`**
- If it doesn't stop then it will automatically kill the process after 10 seconds.
- Execute 2nd command inside another running container:

  - **`docker exec -it container_id command_to_execute`**
  - **it** flag gives interactive response means it execute the command on foreground

- run terminal commands inside a container:
  - 1st run the container
  - 2nd get container id
  - 3rd get into the container with sh
    - **`docker exec -it container_id sh`**

## Create a Docker image

- To do this we need to create a docker file.

  - Flow
    - Specify a base image
    - Run some commands to install dependencies
    - Specify a command to run on container startup

- To create a docker image we need to create a Dockerfile

```
# Contents of dockerfile
FROM alpine

RUN apk add --update redis

CMD ["redis-server"]
```

- Now run the command to create the docker image: **`docker build .`**
- Now after building the image _we can create a container_ from the image: **`docker run container_id`**
- Now we have successfully built the docker image and now we are running the docker image.

## Tagging the Image

- To add a name tag: **`docker build -t mfsiat/redis:latest . `**
- Here **mfsiat/redis** is the name that we added and **latest** is the tag that we provided.
- Here **mfsiat** is the docker id and **redis** is the container name.

## Create a node app and access it from the browser

- Steps
  - create node app -> create Dockerfile -> build from Dockerfile -> run the image as container -> connect to the web app from the browser

## Port Mapping

- For incoming request we need to specify the port by port mapping.
- Its a **`run time constraint`**
- We do not setup port forwarding in dockerfile
- To setup port mapping: **`docker run -p 8080 : 8080 <image id>`**

## Enter the container by shell

- **`docker run -it <container-name> sh`**
- Another we to enter the running container: **` docker exec -it <container_id>`**

## Minimize the unnecessary Build times

- If we change the code base then we don't need to change the dependencies so we don't need npm install every time.
- We could do simply just copy the package.json file first and install it and then copy the whole directory

## Tag the build file

- For accessing the containers faster we should name them or tag them with their versions.

## Docker compose

- Whenever we run multiple containers and we need to connect them we can do two things

  1. connect them with docker cli network features
  2. use docker compose

- Docker compose is another cli which can be used to run multiple containers

- Docker compose does the same commands that are used in docker cli but in a file called **docker-compose.yml**

- Run the yml file by: **`docker-compose up`**
- Run in the background: **`docker-compose up -d`**
- Stop containers: **`docker-compose down`**
- Check the status of the running containers: **`docker-compose ps`**

## Automatic Container restarts

- Check the restart policies for docker-compose.

## Docker lifecycle

- A standard lifecycle for docker: **`create image > build > tag it > run the container`**

## Production Grade Workflow

- In this situation their could be multiple docker containers. Each will have different purpose.
- For running locally or development there could be dockerfile.dev and for production there could be just dockerfile.

- To build dockerfile.dev we need to pass **`-f`** tag to forcefully build the **`Dockerfile.dev`**

- Command: **`docker build -f Dockerfile.dev .`**
