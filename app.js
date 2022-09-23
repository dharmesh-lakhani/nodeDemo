const express = require('express');
const {DB} = require('./DB/DBconnection');
const app = express();

const PORT = process.env.PORT || 3000
app.use(express.json());

const User = require('./Routes/user');

app.use('/user',User);

app.listen(PORT,()=>{
    console.log("Server running successfully")
});