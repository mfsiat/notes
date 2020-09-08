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

- We can give the **`chmod -R 777` ** or ** `chmod -R 775`** permissions.

- The permissions are mainly dependent on the use cases of our application and **bucket access**.

## Mounting and Unmounting

- To mount a bucket use `s3fs bucket_name mounting_point -o allow_other -o passwd_file=~/.passwds3fs`

- To unmount a bucket simply use `sudo umount mounting_point`
