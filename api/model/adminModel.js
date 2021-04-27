const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

var adminSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name should not be left blank']
    },
    email:{
        type:String,
        unique:[true,'Email Already Exists']
    },
    contact:{
        type:String,

    },
    password:{
        type:String,
        required:[true,'password should not left empty'],
        minlength:[4,'Password should be greater than 4']
    },
    saltString:{type:String}
});


//methods for encrypting password

adminSchema.pre('save',function(next){
    bcrypt.genSalt(15,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash,
            this.saltString=salt
            next();
        })
    })

});

// adminSchema.methods.verifyPassword=(password)=>{
//  bcrypt.compare(password,this.password,(err,result)=>{
//      if(err)
//      return err;
//      else 
//      {
//      return result;
//      }
//  })
// }

    adminSchema.methods.verifyPassword = function(password){
        return bcrypt.compareSync(password,this.password);
    }

mongoose.model('admin',adminSchema);