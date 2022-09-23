const mongoose = require("mongoose");

const DB = mongoose.connect("mongodb://localhost:27017/dddd",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connection successful...!")
}).catch((error) => {
    console.log("database connection error...!")
})

module.exports ={DB};