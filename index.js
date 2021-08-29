const express = require('express');
const app = express();
const port = 7000;
const path = require('path');
//use static files
app.use(express.static('./assets'));
// /connecting to database
app.use(express.urlencoded({extended:true})) //req.body encoded
const db = require('./config/mongoose');

//using routes
app.use(require('./routes/todo_route'));
//use view engine
app.set('view engine','ejs')
app.set('views','./views')


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }


    console.log(`Server is running on port: ${port}`);
});
