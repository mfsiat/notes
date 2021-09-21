# Github Actions

> Simple demonstration on github actions

## What is Github Actions

- Its a platform to automate developer workflows

- What are those workflow?
  - Maintain organizational task
  - Automate them
  - Get automated response
  - Some of these workflows are: **`PR created, contr. added PR merged Issue created`**

## CI CD with Github actions

- How ci cd works

- Commit code -> Test -> Build -> Push -> Deploy

## Workflow generation 
> How the workflow triggers or runs 

- The workflow works with the yml file.
- The yml file contains the commands and instructions to run the workflow. 
- The yml file contains all the instructions
- Basic syntax 
```yml
name: Deploy
on:
  workflow_dispatch:
#on:
#push:
#branches: [ master ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Test the Automation
        uses: appleboy/ssh-action@master
        with:
          host: 3.1.80.58, 18.142.118.51
          username: ubuntu
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd test-cicd 
            git reset --hard origin/master 
            git clean -d -f 
            git pull https://${{ secrets.TOKEN_NAME }}:${{ secrets.TOKEN }}@github.com/mfsiat/test-cicd.git
```
- Here is a basic yml file syntax for ssh into the server and pull the content of the repository and just deploy the content or whatever.
- Name means **`workflow name`** a simple name.
- **`on`** means the time the workflow will trigger.
- **`jobs`** the work that will happen.
- **`deploy`** means the things that will happen on the workflow.
- 