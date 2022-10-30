// App:"Midterm-301197862"
// Student: Jocelyne Ojeda
// StudentId: 301197862
// Date: October 29th, 2022


// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:erulSX8CczUiTbbx@clusterj229.qasqdle.mongodb.net/Todo?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}