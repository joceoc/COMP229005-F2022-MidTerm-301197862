// App:"Midterm-301197862"
// Student: Jocelyne Ojeda
// StudentId: 301197862
// Date: October 29th, 2022


// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model('Todo', todoModel);