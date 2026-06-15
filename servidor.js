const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/resultado", function(req, res) {
  const nome = req.query.nome;
  res.send("GET recebido. Nome: " + nome);
});

app.post("/resultado", function(req, res) {
  const nome = req.body.nome;
  res.send("POST recebido. Nome: " + nome);
});

app.listen(80, function() {
  console.log("Servidor rodando em http://localhost");
});