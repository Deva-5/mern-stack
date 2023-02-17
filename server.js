require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const options = { extensions:['html','htm','css','js','ico','jpg','jpeg','png','svg'],index:['card.html']}

app.use(express.static(__dirname));

app.use(express.static("public",options));

app.get("/card", function(req, result){
	res.sendFile(__dirname+"/card.html");
});

app.get("/resume", function(req, result){
	res.sendFile(__dirname+"/resume.html");
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	{
		console.error(err);
	}
	else
	{
		console.log("DB Connected");


		// userLib.createFirstUser(function(err,result)
		// {
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.createUser({userName : "deva" , yearOfGraduation : 2025},function(err,result){
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		userLib.updateUser("deva", {yearOfGraduation: 2000}, function(err,result)
		{
			if(err)
			{
				console.error(err);
			}
			else{
				console.log(result);
			}
		});
		// userLib.deleteUser("deva kumar1",function(err,result)
		// {
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getUsersbyFilter({userName : "deva"}, function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });
		// userLib.getAllUsers(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});

