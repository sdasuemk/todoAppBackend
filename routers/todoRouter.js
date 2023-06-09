const express = require('express');
const addTodo = require('../middlewares/addTodo');
const allTodos = require('../middlewares/getTodo');
const editTodo = require('../middlewares/editTodo');
const deleteTodo = require('../middlewares/deleteTodo');
const authGuard = require('../middlewares/common/accessDefined');

const todoRouter = express.Router();

//create new
todoRouter.post('/add', authGuard, addTodo);
// read existing
todoRouter.get('/read', authGuard, allTodos);
// update existing
todoRouter.put('/edit/:id', authGuard, editTodo);
// delete existing
todoRouter.delete('/del/:id', authGuard, deleteTodo);


module.exports = todoRouter;
