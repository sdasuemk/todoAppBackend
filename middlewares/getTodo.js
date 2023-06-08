const Todo = require('../schemas/models/Todo')

const allTodos = async (req,res,next) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
        console.log('Todos are available')
      } 
    catch (error) {
        console.error('Failed to get todos:', error);
        res.status(500).send('Failed to get todos');
      } 
    finally {
        next();
      }
    
};
module.exports = allTodos;