Todo API - Build using NodeJs + Express + Sequelize + AJV Schema Validator with MySQL Database

## Sample Command without nodemon
node --env-file=.env src/app.js

## For Development
npm start

## Check for Sequelize Commands
npx sequelize --help

## Linux Config.json
{
  "development": {
    "username": "devmysql",
    "password": "devRangie25",
    "database": "todo_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

## Windows Config.json
{
  "development": {
    "username": "root",
    "password": "null",
    "database": "todo_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

