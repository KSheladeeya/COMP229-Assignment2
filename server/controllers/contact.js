/*

* File name: contact.js (controllers file)
* Student name: Keyur Sheladeeya
* Student Id: 301167493
* Date: 25-02-2021 (DD-MM-YYYY)

*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req,res,next)=>{
    Contact.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);

            res.render('contact/list',
            {title: "Contacts",
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    }).sort({"name":1})
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('contact/add',{title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})
} 

module.exports.processAddPage = (req,res,next)=>{
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email_id": req.body.email_id
    });

    Contact.create(newContact, (err,Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err); // if error occurs, stop the server 
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{

    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err); // stop the server
        }
        else
        {
            // show the edit view 
            res.render('contact/edit', 
            { title: 'Edit Contact', 
            contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });

}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;

    let updateContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email_id": req.body.email_id
    });

    Contact.updateOne({_id: id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err); // stop the server
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    
    Contact.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err); // if error occurs, stop the server 
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
}
