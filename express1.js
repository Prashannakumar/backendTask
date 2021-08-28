var express = require('express');
const mongodb = require ('mongodb').MongoClient;
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){

res.send('hello World');

});

app.listen(3000, function(){

	console.log("Check port 3000");
});

mongodb.connect("mongodb+srv://prashanna:prashanna@cluster0.hjkjx.mongodb.net/express?retryWrites=true&w=majority", (error, database)=>{
    if(!error){
        db = database.db("express");
        console.log('db connected');
    }
    else{
        console.log('db not connected');
    }
});

app.post("/", (req,res) => {
    req = 'gopi';
    console.log(req);
 
   // req.body._id = new Date().getTime();
 
     db.collection("userLogin").insert(req, (error, data)=>{
 
         if(error){
             console.log(error);
             res.status(403).json("Error in Insert query");
         }
         else{
             res.json("User registered successfully");
         }
 
     });
 
 });