# Docker Intro 

* Download setup ile from docker hub. 
* Need account for the download. 
* docker built on the Go programming language.

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