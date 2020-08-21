// getting our express app
const express = require('express');

const router = express.Router();//import router for all the routes

const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
//import controller for all the routes
const homeController = require('../controllers/home_controller');

// founded our controller here
router.get('/', homeController.home);
//get request is handled by this route
router.post('/Todolist', homeController.todoPostlist); 
//post request is handled by this route
router.get('/delete-todo', homeController.deletelist); 
// delete request is handled by this route

module.exports = router;
// just exported itself and accessed by (index.js) 