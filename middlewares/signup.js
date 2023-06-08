const User = require('../schemas/models/User');

const doSignup = async (req, res, next) => {
   try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
    console.log("new user saved successfully");

   }
   catch (err) {
    console.error('Failed to create user:', err);
    res.status(500).send('Failed to create user');
   }
   finally {
    next();
   }

};

module.exports = doSignup;