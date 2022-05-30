const express = require('express')
const app = express()

// main routes
const { userRoutes } = require('./routes')
app.use(userRoutes)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to trybe!'
  }).send();
});

module.exports=app;