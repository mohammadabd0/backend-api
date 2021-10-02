'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books');
const bookModel = require('./model');

//function
function seedbookInformation() {
    const bookone = new bookModel({
        title: 'java ',
        description: 'Java is a programming language and Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere! ',
        status: 'anything',
        email: 'mohammadabdo518@gmail.com',
    
    })
    const booktow = new bookModel({
        title: 'java script ',
        description: 'JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage and add special effects to the webpage. On websites, it is mainly used for validation purposes. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors. ',
        status: 'anything',
        email: 'mohammadabdo518@gmail.com',
        
    })
    const bookthree = new bookModel({
        title: 'c++',
        description: 'c++ is a programming language  is fast ',
        status: 'anything',
        email: 'mohammadabdo518@gmail.com',
      
    })

    bookone.save();
    booktow.save();
    bookthree.save();
}
// seedbookInformation();


// getBook
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

module.exports =
    getBookHandler ;
