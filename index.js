
// setting up our express server
const express = require('express');
// initialising our app
const app = express();
const port = 9000;
// connecting to the database
const db=require('./config/mongoose');
const List=require('./models/model.js');

// setting up our home controller



// setting up our view engine
app.set('view engine','ejs')
app.set('views', './views');

// setting up middlewares
app.use(express.urlencoded());
app.use(express.static('assets'));

// founded our server here
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err)

    }
    console.log('Sever is up and running at port:',port)
});

