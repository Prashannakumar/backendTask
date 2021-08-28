const express = require("express");
const cors = require('cors')
const mongodb = require('mongodb').MongoClient
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

var db;

mongodb.connect("mongodb+srv://prashanna:prashanna@cluster0.hjkjx.mongodb.net/express?retryWrites=true&w=majority", (error, database) => {
    if (!error) {
        db = database.db("express");
        console.log('db connected');
    }
    else {
        console.log('db not connected');
    }
})

app.post("/", (req, res) => {
    console.log(req.body);
    db.collection('userLogin').insert(req.body, (error, data) => {
        if (error) {
            console.log('error');
        }
        else {
            res.json('success');
        }
    });

});
app.get("/", (req, res) => {
    db.collection('userLogin').find().toArray((error, data) => {
        res.json(data);
    });
})
app.delete("/:name", (req, res) => {
    db.collection('userLogin').deleteOne({un: (req.params.name) }, (error, data) => {
        res.json('removed successfully');
    });
});


module.exports = app;