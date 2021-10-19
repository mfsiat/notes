## Some sample yml files

> some sample yml files that could help

- Sample one with slack notification update

```yml
name: My-workflow

on:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: my-app
        uses: appleboy/ssh-action@master
        with:
          host: 1.2.3.4
          username: server_user_name
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/html/app/
            git stash
            git pull https://{{secrets.TOKEN_NAME}}:{{secrets.TOKEN}}@github.com/mfsiat/repo.git
            git stash pop
            sudo docker-compose build
            sudo docker-compose down
            sudo docker-compose up -d
      - name: Slack Notification
        uses: sonots/slack-notice-action@v3
        with:
          status: ${{ job.status }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
        if: always()
```

- There could be multiple host containing the deploy on multiple servers in that case just put the ips with a comma
```yml
name: My-workflow

on:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: my-app
        uses: appleboy/ssh-action@master
        with:
          host: 1.2.3.4, 5.6.7.8
          username: server_user_name
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/html/app/
            git stash
            git pull https://{{secrets.TOKEN_NAME}}:{{secrets.TOKEN}}@github.com/mfsiat/repo.git
            git stash pop
            sudo docker-compose build
            sudo docker-compose down
            sudo docker-compose up -d
      - name: Slack Notification
        uses: sonots/slack-notice-action@v3
        with:
          status: ${{ job.status }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
        if: always()
```
