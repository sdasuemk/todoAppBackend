const Todo = require('../schemas/models/Todo')

const addTodo = async (req,res,next) => {
    try {
        const todo = new Todo(req.body);
        const result = await todo.save();
        res.status(201).json(result);
        console.log("Todo saved successfully");
      } 
    catch (error) {
        console.error('Failed to create todo:', error);
        res.status(500).send('Failed to create todo');
      } 
    finally {
        next();
      }
    
};
module.exports = addTodo;