var express = require('express');
var router = express.Router();

let firstName = '';
let lastName = '';
let contactNumber = '';
let emailId = '';
let message = '';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    firstName: firstName,
    lastName: lastName,
    contactNumber: contactNumber,
    emailId: emailId,
    message: message
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    firstName: firstName,
    lastName: lastName,
    contactNumber: contactNumber,
    emailId: emailId,
    message: message
  });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us'});
});

/* POST Contact Us page. */
router.post('/contact', function(req, res, next) {
  firstName = req.body.fname;
  lastName = req.body.lname;
  contactNumber = req.body.phone;
  emailId = req.body.email;
  message = req.body.msg;
  res.redirect('/home');
});

module.exports = router;
