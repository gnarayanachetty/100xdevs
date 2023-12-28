const express = require('express');

const z = require('zod');
const app = express()

const numberSchema = z.array(z.number())

const schemaObj = z.object({
	username: z.string(),
	email:z.string().email(),
	country:z.literal("In").or(z.literal("US"))
})
app.use(express.json());

app.get('/',function(req,res){
	// const kidneys = req.body.kidneys;
	// const resp = numberSchema.safeParse(kidneys)
	res.send("hello world");
})
app.post('/health-check',function(req,res){
	const kidneys = req.body.kidneys;
	const resp = numberSchema.safeParse(kidneys)
	res.sendfile(__dirname + "./index.html");
})

app.listen(3000,function(){
	console.log('server is listneing on port 3000');
});
