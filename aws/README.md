# AWS tutorials
> some basics on aws ec2, s3, EBS etc

## Basics 

- aws is everything, you can't just finish it in some words. 
- first we need to define the ec2 where our app will be statyin. 
- declare the **VPC**, inside the vpc there stays a **subnet**, it could be private or public. 
- mainly the ec2 statys on **public** and the rds (db for app) stays on **private** subnet.
- the artichecture is tough but solid. 
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


## File uplaods

- 
