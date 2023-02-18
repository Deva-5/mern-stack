const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName :{type : String , required: true, unique: true},
    yearOfGraduation : {type : Number , required: true},
    createAt : {type : Date,default:Date.now},
    isDeleted:{type : Boolean,default :false}
});

const TODOSchema = new mongoose.Schema({
    title :{type : String , required: true, unique: true},
    isCompleted : {type : Boolean,default : false},
    createAt : {type : Date,default:Date.now},
    isDeleted:{type : Boolean,default :false},
});

const userModel = mongoose.model("user",userSchema) || mongoose.model("user",TODOSchema)  ;

module.exports = userModel;