const express = require('express')
const app = express();
const port = 8000;





app.listen(function(err){
    if(err){
        console.log('server is giving error:',err)
    }
    console.log('server is up and running at port:',port)
})