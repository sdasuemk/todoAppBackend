//external import
const mongoose = require('mongoose');

// schema instance

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    id: {
        type: Number,
        required: true
    }

});

// model

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;