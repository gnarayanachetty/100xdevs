const express = require('express');
const app = express()
app.use(express.json());

function isOldEnough(age){
	if(age >= 14){
		return true;
	}else{
		return false;
	}
}
function isOldEnoughMiddleware(req,res,next){
	if(req.query.age >= 14){
		console.log('age',req.query.age);
		next()
	}else{
		res.status(411).json({
			msg:"Age is not enough to allow the user to send the data."
		})
	}
}
// app.get('/ride1',function(req,res){
// 	if(isOldEnough(req.query.age)){
// 		res.json({
// 			msg:'You have successfully riden the ride1'
// 		})
// 	}else{
// 		res.status(411).json({
// 			msg:"Age is not enough for ride1"
// 		})
// 	}
	
// })
app.use(isOldEnoughMiddleware);
app.get('/ride1',function(req,res){
	
	res.json({
		msg:'You have successfully riden the ride1'
	})
	
	
	
})
app.get('/ride2',function(req,res){
	
	res.json({
		msg:'You have successfully riden the ride2'
	})
	
	
	
})
app.listen(3000,function(){
	console.log('server is running at 3000')
})