const http = require('http');
const express = require("express");
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// mimic the db using array
let blogList = [];

app.get('/blogs', (req,res) => {
	return res.status(200).json({
		data: blogList,
		success:true
	});
});

app.post('blogs', (req,res) => {
	blogList.push({title: req.body.title, content:req.body.content, id:Math.floor(Math.random(1000) * 1000)});
	return res.status(201).json({
		success:true
	})
});

app.get('/blogs/:id', (req,res) =>{

});

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


