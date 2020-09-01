const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res) => {

    var questionarios = [
        {titulo: "Doritos"},
        {titulo: "Coca-Cola"},
        {titulo: "Leite"}
    ]

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