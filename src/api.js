//src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {
	//set status code to 200
	res.status(200);
	
	//return an object with the greeting
	//greeting is key and req.params
	res.send({greeting:greeting(req.params.name)});
});

module.exports = app;
