# S3FS Fuse system installation for AWS s3 bucket

> doc on s3fs installation

## What is it?

- A simple way to mount s3 with the EBS

## Installation

- Install dependencies

```bash
sudo yum install automake fuse fuse-devel gcc-c++ git libcurl-devel libxml2-devel make openssl-devel
```

- Download the source codes from github

```bash
git clone https://github.com/s3fs-fuse/s3fs-fuse.git
```

- Go to the directory `cd s3fs-fuse` and install them

```bash
# ./autogen.sh

# ./configure — prefix=/usr — with-openssl

# make

# sudo make install
```

- Done

## Configuration

- To configure the role for **`S3 Full Access`** we can do it by two way.

  - One is to grant **IAM** role as **S3FullAccess**.
  - Two create a .passwd-s3fs file for recognition.
  - **We need both of them**.

- Download the credentials containing the **access key** and **access key id** as csv or any format.

- Then copy them to the EC2 and save them as any file you want.

- We can do it as **`echo ACCESS_KEY:SECRET_ACCESS_KEY > PATH_TO_FILE`**

- Here give your credentials and whenever we want to mount something we need to have this file to show the `s3fs` command our key and id.

- Whenever we mount a bucket we can have some complexities.

- Most of them are gaining access related issues. These can be easily solved by giving the EC2 explicit access to the buckets.

- We can give the **`chmod -R 777`** or **`chmod -R 775`** permissions.

- The permissions are mainly dependent on the use cases of our application and **bucket access**.

## Mounting and Un-mounting

- To mount a bucket use

```bash
s3fs bucket_name mounting_point -o allow_other -o passwd_file=~/.passwds3fs
```

- To unmount a bucket simply use

```bash
sudo umount mounting_point
```

## Why Use S3 and why mount a bucket on EBS

- when we create the **EC2** we get 8 GB of EBS storage which mainly used as storing our apps or we can say we can store our codes there.

- But when we store our objects like big files like pictures videos or something else like **static objects** then it is **beneficial** to use the simple storage service like s3 from amazon.

- We can not just add a bucket on our EBS. We need to mount it on the EBS so that the EBS could recognize the mounted folder as it's own folder or ETC.

- This is why we do this.

- On EBS we can get 8 GB using the free tier. For more storage you need to pay and upgrade package.

- On s3 free service we can get minimum 50 Terabytes of data. I got 256 Terabyte of data on two folders each.

- But remember with the request that are being sent to s3 are not unlimited. You need to keep that on mind.

## Issues

- The bucket access can be slow depending on your region.

- Permissions have to be set manually on EBS.

- [Here is the github Issue link](https://github.com/s3fs-fuse/s3fs-fuse/issues/673)
