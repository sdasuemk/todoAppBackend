const User = require('../schemas/models/User');

const doLogin = async (req, res, next) => {
   try {
    const user = await User.findOne({userName: req.body.userName});
    console.log(user);
    if(user) {
        if(user.password = req.body.password){
            res.status(200).send({message: 'password matched'});
            console.log("User found successfully");
            return;
        }
    }
    res.status(404).send("user not found");
    console.log("user not found");

   }
   catch (err) {
    console.error('Failed to login:', err);
    res.status(500).send('Failed to login');
   }
   finally {
    next();
   }

};

module.exports = doLogin;