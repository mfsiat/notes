# Commands for aws cli

## EC2

- Create Key pair: **`aws ec2 create-key-pair --key-name MyKeyPair --query 'KeyMaterial' --output text > MyKeyPair.pem`**

- Create an instance: **`aws ec2 run-instances --image-id ami-xxxxxxxx --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-903004f8 --subnet-id subnet-6e7f829e`**

- Name the instance: **`aws ec2 create-tags --resources i-5203422c --tags Key=Name,Value=MyInstance`**

- Terminate an instance: **`aws ec2 terminate-instances --instance-ids i-id`**

- Describe Key pair: **`aws ec2 describe-key-pairs --key-name KeyName`**

## S3

- Create a Bucket: **`aws s3api create-bucket --bucket bucket-name --region ap-southeast-1`**
