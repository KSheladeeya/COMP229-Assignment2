let express = require('express');
let router = express.Router();

/* default values for first time home page */
let firstName = 'Keyur';
let lastName = 'Sheladeeya';
let contactNumber = '+91 9725676845';
let emailId = 'kshelade@my.centennialcollege.ca';
let message = 'Be happy for this moment !!';

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
        title:'Home',
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber,
        emailId: emailId,
        message: message
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {title:'About Me'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title:'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title:'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', {title:'Contact Us'});
}

module.exports.processContactPage = function(req, res, next) {
    firstName = req.body.fname;
    lastName = req.body.lname;
    contactNumber = req.body.phone;
    emailId = req.body.email;
    message = req.body.msg;
    res.redirect('/home');
  } 
