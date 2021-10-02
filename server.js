'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')

const server = express();
server.use(cors());
const PORT = process.env.PORT;

//Route
server.get('/getbooks',getBookHandler)
server.get('test'/test)
mongoose.connect('mongodb://localhost:27017/books');



// getBook
const bookModel = require('./module/Book')
console.log('this is bookmodel',bookModel)
// http://localhost:3001/getbooks?email=mohammadabdo518@gmail.com
function getBookHandler(req,res){
    let email = req.query.email
    bookModel.find({email},function(error,ownerData) {
        if(error) {
            console.log('error in getting data',error)
        } else {
            res.send(ownerData)
            console.log(ownerData)
        }
    })
}



server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

function test(req,res){
    res.send('test')
}