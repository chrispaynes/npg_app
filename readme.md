# npg_app

Node Postgres app.

## Features
* Node-Postgres

## Installation
[Install PostgreSQL](https://www.postgresql.org)

Install the Database
```
$ psql
CREATE USER node_pg WITH PASSWORD 'node_pg';
CREATE DATABASE recipe_book_db;

$ psql -d recipe_book_db -U node_pg
recipe_book_db-> \i init.sql
GRANT
CREATE TABLE
```

Clone the repo, install the node_modules.
```
$ git clone the repo
$ cd ./npg_app/
$ npm install
```

## Usage
To start the app server use an NPM script from package.json.

#### Run using vanilla Webpack
```
$ cd ./react_redux_todo/
$ npm start
...
