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

/* POST route for processing Contact Us page. */
router.post('/contact', indexController.processContactPage);

/* GET Route for displaying the Login page */
router.get('/login',indexController.displayLoginPage);

/* POST Route for processing Login page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register',indexController.displayRegisterPage);

/* POST Route for processing Register page*/
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
