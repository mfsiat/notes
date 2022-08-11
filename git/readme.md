# Git Basics
> Some important notes on Git

## Git Advanced
- Some advanced commands for Git

## Interactive Rebase
> To update a commit message
```
git log --online
git rebase -i HEAD~3
```
- Add **reword** for update commit & **squash** combine two commit
- By doing **squash** we combine two commit into one thus we make new commit

## Cherry Picking
> Try avoiding cherry pick
- First copy the commit hash then type **`git cherry-pick commit_hash`**
- To undo cherry-pick just checkout to master 
- Then type **`git reset --hard HEAD~1`** here HEAD~Number_of_commit

## Reflog
- Suppose we don't want some commits 
- We reset and lost some important things & realize it was a horrible mistake
- We copy the commit_hash & type **`git reset --hard commit_hash`**
- And realize something is missed so we type **`git reflog`**
- There will be everything so just copy the commit_hash and move to a new branch
```
git branch branch_name commit_hash
```
- That will contain the lost commit 
- This will also be applicable for deleted branch, you can restore your deleted branch with all it's commit

## Submodules
- On a project we use multiple packages or modules which contains different codes than yours
- Submodules is a git repo inside another git repo
- With this we can add another repo on our existing repo so that we could checkout from different commits and revision our code
- Just add **`git submodule add git_repo`**
- The new repo will be add on the existing repo, the existing repo will be the main repo
- Please dont mess with submodules
- Better to add the new repos like this 
```
git clone --recurse-submodules repo_link
```

## Search & Find
- You can search by date --before / --after 
- By message --grep
- By author --author
- By file -- <filename> 
- By branch -- <branch-A>

## Take a Backup of untracked files 
- Follow the snippets
```
git ls-files --others --exclude-standard -z |\
xargs -0 tar rvf ~/backup-untracked.tar.gz
```