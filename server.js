'use strict';
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const server = express();
server.use(express.json());
server.use(cors());
const PORT = process.env.PORT;
//import
 const updateBook = require('./module/updateBook')
const getBookHandler = require('./module/Book');
const addBook = require('./module/addBook')
const deleteBook = require('./module/deleteBook')

//Route
server.get('/', homeRouteHandler);
server.post('/addBook', addBook);
server.get('/getbooks',getBookHandler)
server.delete('/deleteBook', deleteBook);
server.put('/updateBook', updateBook);



function homeRouteHandler(req, res) {
    res.send('Home Route')
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
