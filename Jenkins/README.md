# Jenkins Installation

> Install jenkins with docker

## Procedure Document

    Learn DevOps: Jenkins - Procedure document
    Practical details
    Github repository: https://github.com/wardviaene/jenkins-course

## Other Repos used in this course:

- https://github.com/wardviaene/docker-demo

- https://github.com/wardviaene/jenkins-docker

- DigitalOcean free $10 coupon: https://m.do.co/c/007f99ffb902

- Full list of installation parameters: see https://hub.docker.com/_/jenkins/

## Create DigitalOcean Account

- Sign-up using https://m.do.co/c/007f99ffb902 to get $10 in credit to use on a droplet

```
Create droplet
with the $10 credits you can run a 1 GB memory droplet for 1 month, a 2 GB for at least 2 weeks and a 4 GB droplet for at least 1 week. The 4 GB memory droplet is recommended
```

- Choose for ubuntu 16.04.x (xenial)

- You can choose another system, but the instructions provided to install docker will only work on ubuntu xenial

## Install Docker

```
$ sudo apt-get update

$ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

$ sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'

$ sudo apt-get update

$ sudo apt-get install -y docker-engine

$ sudo systemctl enable docker
```

## Install Jenkins

```
$ sudo mkdir -p /var/jenkins_home

$ sudo chown -R 1000:1000 /var/jenkins_home/

$ docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home --name jenkins -d jenkins/jenkins:lts
```

- Open browser and go to: http://IP:8080/ (change IP to your droplet IP)

- You will be asked for initial password for the Jenkins, you can get this password by entering following command on your server.

```
$ cat /var/jenkins_home/secrets/initialAdminPassword
```

A screen with “Create First admin User prompt” will appear. You will need to enter a username, password, full name and email address.

## Alternative Installation methods

- Using a Vagrant box: https://github.com/wardviaene/devops-box

- Works on Mac / Linux / Windows

- Download virtualbox at www.virtualbox.org
