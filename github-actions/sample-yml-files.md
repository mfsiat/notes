## Some sample yml files

> some sample yml files that could help

- Sample one with slack notification update

```yml
name: Deploy_JC_Maya_Api

on:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: JC-prod
        uses: appleboy/ssh-action@master
        with:
          host: 122.248.193.66, 13.228.247.196, 175.41.138.105, 175.41.171.54, 18.136.222.141
          username: ubuntu
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/html/maya_jc/
            git stash
            git pull origin jc_bot_configuration
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
