const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("bem vindo ao meu blog!");
});

//app.get("/ola/:nome/:cargo", function(req, res){
//   res.send("<h1>Ola "+req.params.nome</h1>"+ "<h2> Seu cargo e "+req.params.cargo</h2>");

//});

app.listen(8082, function(){
    console.log("Servidor rodando na url http://localhost:8082");
}); //função mantém o código rodando e deve ser a ultima do código
