const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ami1708:Y_4.mxSzEKY!S(*@cluster0.rgmrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDB "));
db.once('open',function(){
    console.log("connected to the database::MongoDB")

});
module.exports = db;

