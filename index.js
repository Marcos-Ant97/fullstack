const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.use(express.static('public'));

const routes = require("./routes/routes.js")(app, fs);

/*
app.get("/",(req,res) => {

    /*let url = "localhost:8080/questionarios";

    let settings = { method: "Get" };

    fetch(url, settings).then(res => res.json()).then((json) => {
        console.log(json);
    });

    //var questionarios = ;

    res.render("home",{
        questionarios: questionarios
    });
});

app.get("/novo",(req,res) => {
    res.render("create");
});*/

app.listen(8080,() => {
    console.log("app rodando");
});