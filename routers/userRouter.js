const express = require('express');
const doSignup = require('../middlewares/signup');
const doLogin = require('../middlewares/login');

const userRouter = express.Router();

// signup
userRouter.post('/signup', doSignup);

// login

userRouter.post('/login', doLogin);

module.exports = userRouter;