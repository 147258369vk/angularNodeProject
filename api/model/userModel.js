const mongoose = require('mongoose');

var userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    },
    address:{
        type:String
    }

})

mongoose.model('user',userSchema,"MyUser");