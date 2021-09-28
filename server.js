'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')

const server = express();
server.use(cors());
const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/books');

//Route
server.get('/getbooks',getBook)


// getBook
let bookModel = require('./module/Book')
// localhost:3001/getBook?ownerName=mohammad
function getBook(req,res){
    let ownerName2 = req.query.ownerName
    bookModel.find({ownerName:ownerName2},function(error,ownerData) {
        if(error) {
            console.log('error in getting data',error)
        } else {
            res.send(ownerData)
        }
    })
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})