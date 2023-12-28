const express = require('express')
const app = express()

app.listen(3000,function(){
	console.log('server is running on 3000 port');
})

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gnarayanachetty:NanDini%404%25@cluster0.k6oxeap.mongodb.net/User_App');

const User = mongoose.model('Users', { name: String,email:String,password:String });

const user = new User({ name: 'Narayana Chetty',email:'user@gmail.com',password:'12345' });
user.save()