let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to out book Model
// let Book = require('../models/book'); 
let Contact = require('../models/contact'); 

/* GET Route for the Book list page - READ operation */
// router.get('/', (req,res,next)=>{
//     Book.find((err, bookList) =>{
//         if(err)
//         {
//             return console.error(err);
//         }
//         else
//         {
//             //console.log(BookList);
//             res.render('book',{
//                 title: "Books",
//                 BookList: bookList
//             });
//         }
//     });
// });

let contactController = require('../controllers/contact');

router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE operation */
router.get('/add',contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation */
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE operation */
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation */
router.post('/edit/:id', contactController.processEditPage);

/* GET Route for Delete - DELETE operation */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;