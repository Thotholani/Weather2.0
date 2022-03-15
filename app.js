//jshint:esversion 5

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile("Working");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});