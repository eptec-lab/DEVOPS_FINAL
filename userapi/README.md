

## Description

DEVOPS project based on all the labs

### Creating a web application

This part is stored in userapi folder 

#### !Important

Must be sure that you've Redis installed and runned inside your computer
If it's not the case, follw this link to install redis : 
    
    Windows: https://redis.com/ebook/appendix-a/a-3-installing-on-windows/a-3-2-installing-redis-on-window/
    MacOS: brew install redis or https://redis.io/topics/quickstart
    Linux or MacOS: https://redis.io/topics/quickstart

    Try it inside the terminal: npm run test



User API web application
It is a basic NodeJS web application exposing REST API that creates and stores user parameters in Redis database.

Functionality
Start a web server
Create a user
Update a user
delete a user
Installation


This application is written on NodeJS and it uses Redis database.

Install NodeJS

Install Redis

Install application

Go to the root directory of the application (where package.json file located) and run:

npm install 
Usage
Start a web server
From the root directory of the project run:

npm start
It will start a web server available in your browser at http://localhost:3000.

Create a user
Send a POST (REST protocol) request using terminal:

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"claudengassa","firstname":"Claude","lastname":"Ngassa"}' \
  http://localhost:3000/user
It will output:

{"status":"success","msg":"OK"}
Another way to test your REST API is to use Postman.

Testing
From the root directory of the project, run:

npm test

# Part 2 : APPLY CI/CD using azure

# Part 3 : APPLY IAC USING VAGRANT AND ANSIBLE

# Part 4 : Building Docker Image of the App

# Part 5 : Containerisation using  Docker-compose


# Part 6 : Docker-orchestration using Kubernetes

# Author

Claude NGASSA
