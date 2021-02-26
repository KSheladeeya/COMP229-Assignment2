let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    } 
    next();
}

// connect to out book Model
// let Book = require('../models/book'); 

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

router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET Route for Delete - DELETE operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;