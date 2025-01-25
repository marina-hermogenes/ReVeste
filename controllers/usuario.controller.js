import usuarioServices from "../services/usuario.services.js";

async function getUsuario(req, res) {
  const codigo = req.params.codigo;
  const dados = await usuarioServices.getUsuario(codigo);
  if (dados) {
    res.status(201).json(dados);
  } else {
    res.status(500).json({ error: "Erro ao consultar usuário." });
  }
}

export default {
    getUsuario
}