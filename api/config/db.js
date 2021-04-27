const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mytestProjectDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected succesfully")
}).catch((err)=>{
    console.log("Error in Connection with database " +err);
})


// mongoose.connect("mongodb://localhost:27017/mytestProjectDB",
// (err)=>{
// if(err){
//     console.log(err)
// }
// else{
//     console.log("successfully connect with database");
// }
// })