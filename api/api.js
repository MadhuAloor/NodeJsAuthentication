/**
 * Created by z013n8g on 11/8/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var User = require('./model/User.js');
var jwt = require('./services/jwt.js');

app.use(bodyParser.json());

app.use(cors());

app.post('/register',function(req,res){
  var user = req.body;
  var newUser = new User.model({
    email: user.email,
    password: user.password
  })

  var payload ={
    iss: req.hostname,
    sub:newUser.id
  }

  var token = jwt.encode(payload,"shhh....");

  newUser.save(function(err){
    res.status(200).send({user:newUser.toJSON(),token:token});
  })
})

var jobs = [
   'Cook',
   'Special Cook',
   'batman',
   'Maani'
];

app.get('/jobs',function(req,res){
  if(!req.headers.authorization){
    return res.status(401).send({
      message:'You are not authorized'
    });
  }

  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token,"shhh....");

   if(!payload.sub)
     res.status(401).send({message:'Authentication failed'});

  res.json(jobs);
})

mongoose.connect('mongodb://localhost/authentication_ps');

var server = app.listen(3000,function(){
  console.log('api listen on',server.address().port);
})
