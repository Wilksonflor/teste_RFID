const Cadastro = require("../models/Teste");

exports.novoCadastro = async (req, res) => {
  const { responsavel, placa, tag } = req.body;
  console.log("chegou do cadastro", req.body);
  try {
    const cadastro = await Cadastro.create({
      responsavel,
      placa,
      tag,
    });
    res.status(200).json({ msg: "Criado com sucesso", cadastro });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao criar o cadastro" });
  }
};
