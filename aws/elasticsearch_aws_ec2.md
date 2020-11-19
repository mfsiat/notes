# Install elasticsearch in AWS ec2
> we are installing es on aws ec2 with t2 micro instance

## First install JAVA

- To run ESwe need to make sure we have java installed 
- install java **`sudo amazon-linux-extras install java-openjdk11`**
- install openJDK **`sudo yum install java-1.8.0-openjdk`**
- check java version **`java -version`** 
- switch java version **`alternatives --config java`**

## Install Elasticsearch 

- Download the elasticsearch with the **7.9** version 
- Download **`wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.9.2-x86_64.rpm`**
- Install with **rpm** **`sudo rpm -ivh elasticsearch-7.9.2-x86_64.rpm`**
- After installation reload the deamon **`sudo systemctl daemon-reload`**
- Start with **systemctl** and **enable** on system startup with **`sudo systemctl enable elasticsearch.service`**
- Done

## Important 

- When we install a new version on ec2, the ES needs to be modified to access through it's IP
- In order to access the ES cluster we need to add the following on it's yml file
- Go to **`/etc/elasticsearch/elasticsearch.yml`**
- Add the following at the end.
```bash
transport.host: localhost 
transport.tcp.port: 9300 
http.port: 9200
network.host: 0.0.0
```
- If we change the **network.host** we need to add hosts too
- So it is better on development mode we can simply just add the above lines at the bottom of the configuration file

## To install plugin 

- Go to this directory **`cd /usr/share/elasticsearch/bin`**
- Type **`sudo ./elasticsearch-plugin install plugin-name`**

## Folder Directives 

- Elasticsearch will be installed in `/usr/share/elasticsearch/`
- Configurations placed in `/etc/elasticsearch`
- Init scripts in `/etc/init.d/elasticsearch`
- Logs for elasticsearch `/var/log/elasticsearch`

## Rersources 

- Installation and full config link [Click Here](https://rharshad.com/setup-elasticsearch-cluster-aws-ec2/)
