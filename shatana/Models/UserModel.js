const mongoose = require("mongoose");

const User = new mongoose.model("User", {

    
    fullname: String,
    username: { type: String, Require: true, unique: true },
    email: { type: String, require: true, unique: true },
    address:String,
    contact:String,
    password: { type: String, require: true },
    profilepic: String
});

module.exports = User