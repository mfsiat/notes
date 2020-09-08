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

## Compile a cpp or c files

```bash
g++ main.cpp -o main

# or
gcc main.cpp -o main

# Then execute the main file by typping
./main
```

## How to Use the \_find Command

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

## Package Managers

- Ubuntu and Linux uses the **apt** repositories or package managers.

- CentOS uses the **yum** and Arc uses something else.

- Whenever we want to install or remove something from apt we just use **install** or **remove** tags after writing apt.

- Suppose we dont know a package whether it's located or not on the apt repo we can easily find using name type of the program that we want to use. L

- Suppose we want to install php-mbstring from apt repo, so we can search it and also we can use the right name to install that specific package.

```bash
sudo apt search php-mbstring

# or

sudo apt search *-mbstring*

# or sudo apt search *-mbstring.*
```

## Permissions on linux

- Sometimes we need to explicitly give permissions to a specific file or folder to use them as **`owner or groups or other`** users.

- For that we use the `chmod` command and following `-R` and permission value `777` or any other value.

- Use online chmod calculator to verify the proper chmod number that you want to use.
