const express = require('express');
const addTodo = require('../middlewares/addTodo');
const allTodos = require('../middlewares/getTodo');
const editTodo = require('../middlewares/editTodo');
const deleteTodo = require('../middlewares/deleteTodo');

const todoRouter = express.Router();

//create new
todoRouter.post('/add', addTodo);
// read existing
todoRouter.get('/read', allTodos);
// update existing
todoRouter.put('/edit/:id', editTodo);
// delete existing
todoRouter.delete('/del/:id', deleteTodo);


module.exports = todoRouter;
