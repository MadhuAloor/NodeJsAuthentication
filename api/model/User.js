/**
 * Created by z013n8g on 11/8/16.
 */
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  password: String
})

UserSchema.methods.toJSON = function(){
  var user = this.toObject();
  delete user.password;
  return user;
}

UserSchema.methods.comparePasswords = function(password,callback){
  bcrypt.compare(password,this.password,callback)
}

UserSchema.pre('save',function(next){
  var user = this;
  if(!user.isModified('password')) return next();
  bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err);
      user.password = hash;
      next();
    })
  })
})
module.exports = mongoose.model('User',UserSchema)

