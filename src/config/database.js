const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', { 
    useNewUrlParser: true,
    dbName: 'CookMaster' 
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

module.exports = mongoose;