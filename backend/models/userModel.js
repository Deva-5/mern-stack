const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName :{type : String},
    yearOfGraduation : {type : Number},
    createAt : {type : Date},
    isDeleted:{type : Boolean}
});

module.exports = mongoose.model("user", userSchema);