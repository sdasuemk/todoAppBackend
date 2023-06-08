// import - external
const express = require('express');
const dotenv = require('dotenv');

// app object
const app = express();
dotenv.config();
  
// parse options
app.use(express.json());

// listen
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});