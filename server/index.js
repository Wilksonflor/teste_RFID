const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const app = express();
const DataBase = require("./DbConnect/DB");
const testeRoutes = require('./rotas/cadastroRoutes')

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("servidor funcionando");
});

// Rotas
app.use(testeRoutes)



// Conexão do server
const server = http.createServer(app);
const port = 5000;
server.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
