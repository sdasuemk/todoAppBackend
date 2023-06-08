// import - external
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// imports - internal
const todoRouter = require('./routers/todoRouter');
const userRouter = require('./routers/userRouter');

// app object
const app = express();
dotenv.config();

// mongoose connection
async function connectToMongoDB() {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect MongoDB:', error);
    }
  }
  
  connectToMongoDB();
  
// parse options
app.use(express.json());
app.use('/todo', todoRouter);
app.use('/user', userRouter);


// listen
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});