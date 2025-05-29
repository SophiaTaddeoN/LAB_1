var http = require("http");
var express = require("express");
var colors = require("colors");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static("./public/Lab_1"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views");

var server = http.createServer(app);
server.listen(80);

console.log(
  "Ser".blue +
    "vi".green +
    "dor".yellow +
    " ro".blue +
    "dan".green +
    "do ...".yellow
);

app.get("/", (req, res) => {
  res.redirect("projetos.html");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.post("/cadastrado", function (requisicao, resposta) {
  var nome = requisicao.body.nome;
  var login = requisicao.body.login;
  var senha = requisicao.body.senha;
  var nascimento = requisicao.body.nascimento;
  resposta.render("resposta_cadastro", { nome, login, senha, nascimento });
});

app.post("/login", function (requisicao, resposta) {
  var login = requisicao.body.login;
  var senha = requisicao.body.senha;
  resposta.render("resposta_login", { login, senha });
});
