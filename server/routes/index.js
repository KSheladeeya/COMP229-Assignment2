/*
*
* File name: index.js
* Student name: Keyur Sheladeeya
* Student Id: 301167493
* Date: 12-02-2021 (DD-MM-YYYY)
*
*/


let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* default values for first time home page */
/* let firstName = 'Keyur';
  let lastName = 'Sheladeeya';
  let contactNumber = '+91 9725676845';
  let emailId = 'kshelade@my.centennialcollege.ca';
  let message = 'Be happy for this moment !!';  */

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    firstName: firstName,
    lastName: lastName,
    contactNumber: contactNumber,
    emailId: emailId,
    message: message
  });
}); */

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* POST Contact Us page. */
router.post('/contact', function(req, res, next) {
  firstName = req.body.fname;
  lastName = req.body.lname;
  contactNumber = req.body.phone;
  emailId = req.body.email;
  message = req.body.msg;
  res.redirect('/home');
}); 

// router.post('/contact', indexController.processContactPostPage);


module.exports = router;
