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

## Mounting and Unmounting 

- To mount a bucket use ` s3fs bucket_name mounting_point -o allow_other -o passwd_file=~/.passwds3fs `

- To unmount a bucket simply use ` sudo umount mounting_point `
