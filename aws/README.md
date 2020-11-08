# AWS tutorials

> some basics on aws ec2, s3, EBS etc

## Basics

- aws is everything, you can't just finish it in some words.
- first we need to define the ec2 where our app will be hosted.
- declare the **VPC**, inside the vpc there stays a **subnet**, it could be private or public.
- mainly the ec2 stay's on **public** and the rds (db for app) stays on **private** subnet.
- the architecture is tough but solid.
- first imagine the total architecture and then implement.
- the **vpc** must be included with a **internet gateway** which includes routing table with the internet access.
- these and vpc must be included with the security group which basically is the firewall.
- configure the security group, associate them with the routing table and igw.

## EC2 instance

- EC2 instance is like a personal computer, just the difference is that it is hosted on a virtual private cloud.
- For free tier we get 8 GB ssd with 1 GB ram.
- If we need more ram than we could just increase the swap space from ssd.
- **Make sure to create snapshots** for the EBS, which is the ssd of ec2 storage.
- Before launching an EC2 make sure to create a VPC, a subnet and the firewall containing security groups which includes the internet gateway and routing table.
- Set **enable** for setting up automatic DNS host names.
- After creating the instance log in to the instance via **private keys** on the ssh shell.
- Keep the private keys in private, **don't lose the private key**.
- Sometimes the private key needs some permissions for that we need to define the private key with **`chmod -R 600`** permissions.
- Setup all the necessary files as you like.
- The most important thing for ec2 is that we can scale it according to our need.

## File uploads

- To upload files we use **scp** with the desired commands to upload files on the EC2 server.
- It is wise to upload zipped files to upload any kind of files.
- We can use **FileZilla** or any other SFTP clients to upload file.

## RDS

- RDS is the aws database.
- We can create different types of database instances for different types of database.
- MySql, PostGRE, Oracle even for mongoDB there is dynamo DB on aws.
- To create the instances we need to create a db subnet with proper security groups assigned with that particular DB port.
- Create the RDS according to the given instructions.
- We need to create a db there so that, the db could be added to our app and the app could use that db to create the tables.
- Connecting RDS with our application is easy.
- After creating the RDS instance we will get an **endpoint** which we need to add to our app.
- After that our app will automatically use that DB.
- Creating a RDS instance make our app very fast and reliable.
- It separates the load from the server on different instances, so that the machine could process codebase faster, the RDS could process query faster so that our query generation takes a small time.
- It reduces cost.

## S3

- S3 is a popular service from aws.
- It is **Simple Storage Service** shortly called as **S3**.
- We get huge amount of storage from amazon S3 service.
- We can also mount the s3 folder to our ec2 EBS so that we can use the space as an **external hard drive**.
- The most fascinating thing about S3 is that we can mount our s3 bucket with our app. So that the app could use the s3 bucket to store its huge sized objects to the s3 bucket.
- This is another way we could save our server storage. Where we don't need to add extra EBS ( which are costly btw ) we can use the default s3 bucket storage of 5 terabytes. Yes thats huge
- I mounted two folders on my app.
- I got 256T of storage for each folder.

## AWS Lightsail

- If we don't want to scale that much and also don't want to configure by ourselves then we could use lightsail.
- It's not free it's paid.
- But it's cheap. We can host our small application on it.

## Increase SWAP Usage
> when ram is low we can create and increase swap

- **`Swap is not recommended on SSD`** 
- first check whether swap on or off by typing **`swapnon -s`** 
- `-s` states for summery. 
- To create a standard `2GB` swap type this command **`# fallocate -l 2G /swapfile`**
- Check for the swapfile **`ls -lh /swapfile`**
- Change the permission **`sudo chmod 600 /swapfile`**
- Swap is secured now make the swap file **`sudo mkswap /swapfile`**
- Enable the swap **`sudo swapon /swapfile`**
- Make it permanent go to fstab and add at the end 
```bash 
# edit and add at the bottom  
sudo nano /etc/fstab
/swapfile   swap    swap    sw  0   0
```
- For more info check [Click Here](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-centos-7)

