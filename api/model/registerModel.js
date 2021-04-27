
const mongoose = require('mongoose');


var newUserSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:[true,'Name should not be empty']
    },
    email:{
      type:String,
      unique:true,
    //   pattern:['/','error']  
    },
    marks:{
        type:Number,
        max:[6,'number should be greater than 6'],
        min:2,
    }


});

mongoose.model('register',newUserSchema);