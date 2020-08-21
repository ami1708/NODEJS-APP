const express = require("express"); 
// import express
const app = express();
app.use(express.urlencoded({ extended: true })); //
const router = express.Router(); 
//import router for all the routes
const todoController = require("../controllers/todo_controller"); 
//import controller for all the routes
router.get('/', todoController.todolist); 
//get request is handled by this route
router.post('/Todolist', todoController.todoPostlist); 
//post request is handled by this route
router.get('/delete-todo', todoController.deletelist); 
// delete request is handled by this route
module.exports = router;