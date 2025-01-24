import jwt from "jsonwebtoken";
import bd from '../repositories/bd.js';

const SECRET_KEY = "sua_chave_secreta";

export const loginController = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  try {
    const client = await bd.conectar();

    const result = await client.query("SELECT codigo, senha FROM usuario WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const user = result.rows[0];

    if (senha !== user.senha) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    //gera um token JWT
    const token = jwt.sign({ userId: user.codigo }, SECRET_KEY, { expiresIn: "1h" });

    //armazenar o token no cookie
    res.cookie("token", token, { httpOnly: true, secure: false });
    res.json({ message: "Login bem-sucedido", token });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};
