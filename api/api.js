/**
 * Created by z013n8g on 11/8/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var User = require('./model/User.js');
var jwt = require('jwt-simple');

app.use(bodyParser.json());

app.use(cors());

app.post('/register',function(req,res){
  var user = req.body;
  var newUser = new User({
    email: user.email,
    password: user.password
  })

  newUser.save(function(err){
     createSendToken(newUser,res);
  })
})

app.post('/login',function(req,res){
  req.user = req.body;

  var searchUser = {
    email: req.user.email
  };

  User.findOne(searchUser,function(err,user){

    if(err)throw err;

    if(!user)
      return res.status(401).send({message:"you are not authorized"});
    user.comparePasswords(req.user.password,function(err,isMatch){
      if(err)throw err;

      if(!isMatch)
        return res.status(401).send({message:"you are not authorized"});
      createSendToken(user,res);
    });
  })
})

function createSendToken(user,res){
  var payload ={
    sub:user.id
  }


  var token = jwt.encode(payload,"shhh....");
  res.status(200).send({user:user.toJSON(),token:token});

}
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
