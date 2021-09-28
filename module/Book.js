'use strict';


const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
    ownerName: String
});
const bookModel = mongoose.model('book', bookSchema);

//function
function seedbookInformation() {
    const bookone = new bookModel({
        title: 'java ',
        description: 'Java is a programming language and Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere! ',
        status: 'anything',
        email: 'mohammadabd464@gmail.com',
        ownerName: 'mohammad '
    })
    const booktow = new bookModel({
        title: 'java script ',
        description: 'JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage and add special effects to the webpage. On websites, it is mainly used for validation purposes. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors. ',
        status: 'anything',
        email: 'ahmahzz544@gmail.com',
        ownerName: 'ahmah '
    })
    const bookthree = new bookModel({
        title: 'c++ ',
        description: 'c++ is a programming language  is fast ',
        status: 'anything',
        email: 'leen89@gmail.com',
        ownerName: 'leen'
    })

    bookone.save();
    booktow.save();
    bookthree.save();
}



module.exports = {
    bookModel
}