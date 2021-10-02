'use strict';
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const server = express();
server.use(cors());
const PORT = process.env.PORT;
//import
const getBookHandler = require('./module/Book');
const addBook = require('./module/addBook')
const deleteBook = require('./module/deleteBook')

//Route
server.post('/addBook', addBook);
server.get('/getbooks',getBookHandler)
server.delete('/deleteBook', deleteBook);


server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
