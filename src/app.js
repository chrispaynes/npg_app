const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const dust = require('dustjs-helpers');
const express = require('express');
const pg = require('pg');
const path = require('path');
const app = express();
const Vue = require("vue");

function connect() {
  return "postgres://node_pg:node_pg@localhost/recipe_book_db";
}

function port() {
  return process.env.port || 3000;
}

app.engine('dust', consolidate.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Serve static files via public directory.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'vendor')));

// Parse incoming request bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Routes
app.get("/", (req, res) => res.render('index'));
app.get("/vue", (req, res) => res.sendFile(path.join(__dirname+'/views/vue.html')));

// Server Configuration
app.listen(port(), () => console.log(`Connected on port ${port()}`));