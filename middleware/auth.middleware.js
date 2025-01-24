import jwt from "jsonwebtoken";

const SECRET_KEY = "sua_chave_secreta";

export const verificarToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Acesso não autorizado" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("Erro ao verificar token:", err);
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
};
