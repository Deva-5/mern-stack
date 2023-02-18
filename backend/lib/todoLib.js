const userModel = require("../models/userModel");

module.exports.getAllTodos = async function(callback) {
    try {
        var Todos = await userModel.find({});
        callback(null, Todos);
    } 
    catch (err) {
        callback(err, null);
    }
}

module.exports.createTodo = async function(Todos,callback) {
    try {
        var newTodo = new userModel(user);
        var result = await newTodo.save();
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}

module.exports.updateTodo = async function(username,data,callback) {
    try {
        var query = {
            Todos : username,
        };
        var result = await userModel.updateOne(query,data);
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}