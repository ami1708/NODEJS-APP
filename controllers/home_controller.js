// require our express module
const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true })); 
// req.body elements is encoded
const db= require('../config/mongoose'); 
//import mongoose configuration
const TodoContact = require("../models/todo"); 
//import collection model of mongo database
var TodoList = [{
    description : "Have to go to gym ",
    date: "AUG 19 2020",
    category: "gym"

},
{
    description : "Have to buy fruits ",
    date: "AUG 22 2020",
    category: "work"
}
]


//created for double check purpose
//this controller is created for rendering the page where data comes from the database and is rendered to the browser

module.exports.todolist =(req,res)=>{

    TodoContact.find({},function(err,contacts){
        if(err){
            console.log("Error in fetching the details")
            return;
        }
        // rendered ejs file
        return res.render('home',{
            title: 'MY-Contact-list',
            Todo_List:contacts,

        })

    })
}




// post controller when a form is submitted or data is passed from the ejs file to the database

module.export.todoPostlist = (req,res) =>{
    console.log(req.body.date);
    //collection is created in database
    TodoContact.create({
        description: req.body.description,
        category: req.body.category,
        date : req.body.date
    },

function(err, newContact) { //catch section
            if (err) {
                console.log("Error in database");
                return;
            }
            console.log("****new Todolist*****", newContact);
            return res.redirect('/'); // response is redirected to this url

        });

    }

// controller for the delete a list items
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

// module.exports.actionName = function(req, res){}
//access this in routes go to routes //