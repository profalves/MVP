const express = require('express')
const db = require('./config/database');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes'));

app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to MVP Backend!'
  }).send();
});

module.exports=app;
