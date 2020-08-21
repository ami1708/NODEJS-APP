const mongoose = require('mongoose')//import mongoose odm
// Creating mongoose Schema
const Contactschema = new mongoose.Schema({
description: {
    type:String,
    required : true
},
category:{
    type:String,
    required : true
},
date: {
    type: Date,
    required: true
}
});
// creating collection model using mongoose schema
const Contact = mongoose.model('Contact', Contactschema);
module.exports = Contact;


