// let mongoose = require('mongoose');

// // create a model class
// let bookModel = mongoose.Schema({
//     name: String,
//     author: String,
//     published: String,
//     description: String,
//     price: Number
// },
// {
//     collection: "books"
// });

// module.exports = mongoose.model('Book',bookModel);


let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email_id: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact',contactModel);