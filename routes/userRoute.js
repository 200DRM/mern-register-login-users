const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mernauth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('MongoDB connection successful');
  }
});

const UserModel = mongoose.model('users', {
  name: String,
  username: String,
  password: String
});

router.post('/register-user', function(req, res){
  const newUser = new UserModel({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err) {
    if(err) {
      res.send('Something went wrong');
    } else {
      res.send('User registration is successful!');
    }
  });
});

router.post('/login-user', function(req, res){
  UserModel.find({
    username: req.body.username,
    password: req.body.password
  }, function(err, documents){
    if(err) {
      console.log('Something went wrong');
    } else {
      if(documents.length === 0) {
        res.send('Login failed');
      } else {
        res.send('Login successful!');
      }
    }
  });
});

module.exports = router;