require('dotenv').config()
const mongoose=require('mongoose');

function connectDB(){

    mongoose.connect(process.env.MongoUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});

    const connection=mongoose.connection;
    connection.once('open',()=>{

        console.log("connected");
    }).catch(err=>{
        console.log(err)
    })
}

module.exports=connectDB;