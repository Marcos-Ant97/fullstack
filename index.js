const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.use(express.static('public'));

const routes = require("./routes/routes.js")(app, fs);

app.listen(8080,() => {
    console.log("app rodando");
});