# Github Actions

> Simple demonstration on github actions

## Udemy Course Source Code

- For 1 - 4: **`https://github.com/alialaa/github-actions-course`**
- For rest: **`https://github.com/alialaa/github-actions-course-react`**

## Resource 

- Encrypting & Decrypting Files [Github Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- Context [Github Docs](https://docs.github.com/en/actions/learn-github-actions/contexts)

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
- On deploy block our workflow tasks, all are stated.
- Where will the job run, how many jobs will it perform and how will it deploy all are thee inside the deploy block.
- The most important part is the **`uses`** part where we state that which library or action will it use.
- The following commands will have to also follow the action that is being used.

- Example syntax

```yml
name: remote ssh command
on: [push]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: executing remote ssh commands using password
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          script: whoami
```

- Using remote ssh commands and password

```yml
- name: executing remote ssh commands using password
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.HOST }}
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    port: ${{ secrets.PORT }}
    script: whoami
```

- Using private key

```yml
- name: executing remote ssh commands using ssh key
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.HOST }}
    username: ${{ secrets.USERNAME }}
    key: ${{ secrets.KEY }}
    port: ${{ secrets.PORT }}
    script: whoami
```

- Using multiple commands

```yml
- name: multiple command
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.HOST }}
    username: ${{ secrets.USERNAME }}
    key: ${{ secrets.KEY }}
    port: ${{ secrets.PORT }}
    script: |
      whoami
      ls -al
```

- Check the link for more details [appleboy/ssh-action](https://github.com/appleboy/ssh-action)

## Trigger workflow on postman request

- We can also trigger a github actions workflow using postman post request.
- To setup we just need to add the trigger event on **`repository_dispatch`**.
- Sample code:

```yml
name: Trigger workflow on repository Dispatch
on:
  repository_dispatch:
    types: [build]
jobs:
  run-sample-workflow:
    runs-on: ubuntu-latest
    steps:
      - name: just a sample
        run: echo "hello"
```

- Postman post url: **`https://api.github.com/repos/mfsiat/notes/dispatches`**
- Body

```json
{
  "event_type": "build"
}
```

- 2 Headers ->
  - Accept -> **`application/vnd.github.everest-preview+json`**
  - Content-Type -> **`application/json`**
  - We need to add a token as Bearer Token.

- It is always a best practice to add all the **ip**, **username**, **password**, **keys** or any secret to github secrets. 
- And after that you can add those secrets on the appropriate field with ${{secrets.YOUR_SECRET_VALUE_NAME}}.

## Sample workflow for PHP
> We can use workflow ci php laravel applications

- Sample workflow
```
name: Laravel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  laravel-tests:

    runs-on: ubuntu-latest

    steps:
    - uses: shivammathur/setup-php@15c43e89cdef867065b0213be354c2841860869e
      with:
        php-version: '8.0'
    - uses: actions/checkout@v2
    - name: Copy .env
      run: php -r "file_exists('.env') || copy('.env.example', '.env');"
    - name: Install Dependencies
      run: composer install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist
    - name: Generate key
      run: php artisan key:generate
    - name: Directory Permissions
      run: chmod -R 777 storage bootstrap/cache
    - name: Create Database
      run: |
        mkdir -p database
        touch database/database.sqlite
    - name: Execute tests (Unit and Feature tests) via PHPUnit
      env:
        DB_CONNECTION: sqlite
        DB_DATABASE: database/database.sqlite
      run: vendor/bin/phpunit
```

## Deploy on Cpanel 

- Sample workflow to deploy on cpanel 
```
name: Publish Website to Web Hosting
on:
  push:
    branches:
      - main
jobs:
  FTP-Deploy-Action:
    name: FTP-Deploy-Action
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2.1.0
      with:
        fetch-depth: 2
    - name: FTP-Deploy-Action
      uses: SamKirkland/FTP-Deploy-Action@3.1.1
      with:
        ftp-server: ${{ secrets.FTP_SERVER }}
        ftp-username: ${{ secrets.FTP_USERNAME }}
        ftp-password: ${{ secrets.FTP_PASSWORD }}
```
