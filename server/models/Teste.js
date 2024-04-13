const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema({
  responsavel: {
    type: String,
    required: true,
  },
  placa: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});

const Cadastro = mongoose.model("Cadastro", cadastroSchema);

module.exports = Cadastro;
