const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-Cola", preco: 5.0},
        {nome: "Leite", preco: 3.5}
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "inova GS",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,() => {
    console.log("app rodando");
});