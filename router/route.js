const express = require('express')
const {addNewTodo , getAllTodo, toggleTodo , updateTodo , deleteTodo} = require('../controller/todoController');


const route = express.Router();

route.post('/todos' , addNewTodo)
route.get('/todos' , getAllTodo)
route.get('/todos/:id' , toggleTodo)
route.put('/todos/:id' , updateTodo)
route.delete('/todos/:id' , deleteTodo)

module.exports = route