// const { updateOne } = require("../models/userModel");
//const {userModel} = require("../models/userModel");
//import mongoose from "mongoose";
import userModel from "../models/userModel.js";

export async function getAllUsers(callback) {
    try {
        var users = await userModel.find({});
        callback(null, users);
    } 
    catch (err) {
        callback(err, null);
    }
}

export async function createFirstUser(callback) {
    try {
        var user = {
            username : "deva",
            yearOfGraduation : 2024
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null,result);
    } 
    catch (err) {
        callback(err, null);
    }
}


export async function createUser(user,callback) {
    try {
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}

export async function updateUser(username,data,callback) {
    try {
        var query = {
            userName : username
        };
        var result = await userModel.updateOne(query,data);
        callback(null, result);
    } 
    catch (err) {
        callback(err, null);
    }
}


export async function deleteUser(username,callback)
{
    try{
        var query = {
            userName : username,
        };

        var result = await userModel.deleteOne(query);
        callback(null,result);
    }
    catch(err)
    {
        callback(err,null);
    }
}

export async function getUsersbyFilter(filter,callback) {
    try {
        var user = await userModel.find(filter);
        callback(null,user);
    } 
    catch (err) {
        callback(err, null);
    }
}