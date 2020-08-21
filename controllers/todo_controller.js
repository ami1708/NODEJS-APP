const express = require('express'); // import express module
const app = express();
app.use(express.urlencoded({ extended: true })); // req.body elements is encoded
const todo_Db = require('../config/mongoose'); //import mongoose configuration
const TodoContact = require("../models/todo"); //import collection model of mongo database
var TodoList = [{
            description: "Have to submit project",
            date: "Aug 20,2020",
            category: "Work"
        },
        {
            description: "Have to buy some Vegetables",
            date: "AUG 22,2020",
            category: "Personal"
        }
    ] //creates for checking purpose
    //this controller is created for rendering the page where data comes from the database and is rendered to the browser

module.exports.todolist = (req, res) => {

        TodoContact.find({}, function(err, contacts) {
            if (err) {
                console.log("Error in fetching contacts");
                return;
            }
            //rendered to the ejs file
            return res.render('home', {

                title: "My contact list",
                Todo_List: contacts,
            });

        });
    }
    // post controller when a form is submitted or data is passed from the ejs file to the database
module.exports.todoPostlist = (req, res) => {
        console.log(req.body.date);
        //a collection is created in the database    
        TodoContact.create({
            description: req.body.description,
            date: req.body.date,
            category: req.body.category

        }, function(err, newContact) { //catch section
            if (err) {
                console.log("Error in database");
                return;
            }
            console.log("****new Todolist*****", newContact);
            return res.redirect('/'); // response is redirected to this url

        });

    }
    // controller for the delete a list items
    //
module.exports.deletelist = (req, res) => {

    let check = req.query.check;
    if (!check) {
        return res.redirect('back');
    }
    var obj = JSON.parse(check); // convert string to json format
    let id = obj.id; //id is made to pass the database
    console.log(id);

    TodoContact.findByIdAndDelete(id, (err) => { //deleted one document in the database by id
        if (err) {
            console.log("There is some error to delete the data from the mongodb");
            return;
        }
        return res.redirect('/');
    });



}