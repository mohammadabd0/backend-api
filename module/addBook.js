const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books');
const bookModel = require('./model');

async function addBook(req, res) {
    let { bookTitle, bookDescription, bookStatus, userEmail} = req.body;
    await bookModel.create({
        title:bookTitle,
        description:bookDescription,
        status:bookStatus,
        email:userEmail
    })
    bookModel.find({ email: userEmail}, function (error, data) {
        if (error) {
            res.send('Error in getting data')
        } else {
            res.send(data)
        }
    })
}
module.exports = addBook;