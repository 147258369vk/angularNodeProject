require('./adminModel');
const mongoose=require('mongoose');

var productSchema = mongoose.Schema({
  pname:{
    type:String,
  },
  price:{
    type:String,
  },
  quantity:{
    type:Number
  },
  date:{
    type:Date,
    default:Date.now()
  },
  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'admin'
  },


})

mongoose.model('product',productSchema);
