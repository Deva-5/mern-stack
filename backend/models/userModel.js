const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName :{type : String , required: true, unique: true},
    yearOfGraduation : {type : Number , required: true},
    createAt : {type : Date,default:Date.now},
    isDeleted:{type : Boolean,default :false}
});

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;