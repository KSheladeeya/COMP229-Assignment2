let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to out book Model
let Book = require('../models/book'); 

/* GET Route for the Book list page - READ operation */
router.get('/', (req,res,next)=>{
    Book.find((err, bookList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);
            res.render('book',{
                title: "Book List",
                BookList: bookList
            });
        }
    });
});

module.exports = router;