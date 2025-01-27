import bd from "./bd.js";

async function getVenda(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = await conn.query(
      "select venda.codigo, roupa.nome, roupa.foto, endereco.bairro, endereco.numero, endereco.cidade, endereco.estado, venda.horario, venda.mensagem from venda, endereco, roupa where venda.codigoUsuario=$1 and endereco.codigo = venda.codigoEndereco and roupa.codigoVenda = venda.codigo order by venda.horario desc",
      [codigo]
    );
    console.log(query.rows);
    dados = query.rows;
    dados = dados.map((venda) => {
      if (venda.foto) {
        const mimeType = pegarAssinatura(venda.foto);
        venda.foto = `data:${mimeType};base64,${venda.foto.toString("base64")}`;
      } else {
        venda.foto = "Imagens/semFoto.png";
      }
      return venda;
    });
  } catch (erro) {
    console.log(erro);
  } finally {
    conn.release();
  }
  return dados;
}

async function deleteVenda(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    await conn.query(
      "UPDATE roupa SET disponivel = true, codigoVenda = null WHERE codigoVenda = $1",
      [codigo]
    );
    const query = await conn.query(
      "DELETE FROM venda WHERE codigo = $1 RETURNING *",
      [codigo]
    );
    console.log(query.rows);
    dados = query.rows;
  } catch (erro) {
    console.log(erro);
  } finally {
    conn.release();
  }
  return dados;
}

function pegarAssinatura(foto) {
  //Verifica se a imagem é png ou jpeg para converter para base64
  const assinatura = foto.toString("hex", 0, 4);
  if (assinatura == "89504e47") {
    return "image/png";
  } else if (
    assinatura == "ffd8ffe0" ||
    assinatura == "ffd8ffe1" ||
    assinatura == "ffd8ffe2"
  ) {
    return "image/jpeg";
  } else {
    return "application/octet-stream";
  }
}

async function createVenda(codigoUsuario, codigoEndereco, roupas) {
  const conn = await bd.conectar();
  let novaVenda = null;

  try {
    // Inicia a transação
    await conn.query("BEGIN");

    // Insere a nova venda
    const resultVenda = await conn.query(
      "INSERT INTO venda (codigoUsuario, codigoEndereco, horario) VALUES ($1, $2, NOW()) RETURNING *",
      [codigoUsuario, codigoEndereco]
    );
    novaVenda = resultVenda.rows[0]; // Obtemos os dados da nova venda

    // Atualiza as roupas compradas
    const updateRoupaQuery =
      "UPDATE roupa SET disponivel = false, codigoVenda = $1 WHERE codigo = $2 AND disponivel = true";

    for (const roupa of roupas) {
      await conn.query(updateRoupaQuery, [novaVenda.codigo, roupa.codigoRoupa]);
    }

    // Confirma a transação
    await conn.query("COMMIT");
  } catch (error) {
    console.error("Erro ao criar venda:", error);
    await conn.query("ROLLBACK"); // Desfaz a transação em caso de erro
    throw error;
  } finally {
    conn.release();
  }

  return novaVenda;
}

export default {
  getVenda,
  deleteVenda,
  createVenda,
};
