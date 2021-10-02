const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/books');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
    
});
const bookModel = mongoose.model('book', bookSchema);
module.exports = bookModel;
