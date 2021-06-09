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

-
