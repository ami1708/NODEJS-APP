const express = require('express');
const app = express();
const port = 8000;
//requiring the layouts
const expressLayouts = require('express-ejs-layouts')
//use layouts
app.use(expressLayouts);
// use express router

//use static files
app.use(express.static('./assets'));
// /connecting to database
const db = require('./config/mongoose');

//using routes
app.use('/', require('./routes'));
//use view engine
app.set('view engine','ejs')
app.set('views','./views')


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }


    console.log(`Server is running on port: ${port}`);
});
