const express = require("express");
const jsonServer = require("json-server");
const fetch = require("node-fetch");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/db',jsonServer.router('db/db.json'));

app.get("/",(req,res) => {

    /*let url = "localhost:8080/questionarios";

    let settings = { method: "Get" };

    fetch(url, settings).then(res => res.json()).then((json) => {
        console.log(json);
    });*/

    //var questionarios = ;

    res.render("home",{
        questionarios: questionarios
    });
});

app.get("/novo",(req,res) => {
    res.render("create");
});

app.listen(8080,() => {
    console.log("app rodando");
});