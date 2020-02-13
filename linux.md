# Some Basic Linux Commands

> Docs on linux commands

## Basics

```bash
# To find the hidden files
ls -a

# To find the permissions and etc
ls -l

# Combined
ls -la

```

- **"."** means current directory. 

- **".."** means parent directory.

- **pwd** means the location.

- **cd** for changing directory.

- **ls** for showing a list of all the files in the directory.

- **ls** -la for showing the list of files in list format + showing all the hidden files.

- **mkdir** for making a new directory.

- **touch** for creating a new file.

- **cp** for copying a file.

- **cp** -r for copy a directory.

- **mv** for renaming and / or moving a file.

- **open** for opening a file.

- **rm** for removing a file.

- **rm** **-rf** for force removing a directory.

- **man** (-r) this will show some information about -r. -r is an example.


## How to Use the _find Command 
```bash
# To find files in the sub directory 
# this also finds and shows all the files on the sub directory 
find . 

# We can specify with a name 
find JS # etc 

# To find all the directories but no files 
find . -type d

# To specify Type of search we can add directories after -type 

# Find only files 
find . -type f

```

