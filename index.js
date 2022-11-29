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

app.post('blogs', () => {
	console.log(req.body)
});

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


