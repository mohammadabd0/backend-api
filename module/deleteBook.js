const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books');
const bookModel = require('./model');

// http://localhost:3001/deleteBook?bookID=
function deleteBook(req, res) {
    let bookID = req.query.bookID;
    let userEmail = req.query.email;
    bookModel.deleteOne({ _id: bookID }).then(() => {
        bookModel.find({ email: userEmail }, function (error, data) {
            if (error) {
                res.send('Error in getting data')
            } else {
                res.send(data)
            }
        })
    })
}
module.exports = deleteBook;