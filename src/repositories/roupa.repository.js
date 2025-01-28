import bd from "./bd.js";

async function createRoupa(roupa) {
    const conn = await bd.conectar();
    let dados = null;
  
    if (roupa.preco <= 0) {
      throw new Error("Preço deve ser maior que zero.");
    }
  
    if (roupa.codigoUsuario <= 0) {
      throw new Error("Código do usuário deve ser maior que zero");
    }
  
    try {
      const query = `
              INSERT INTO roupa (nome, descricao, tamanho, tipo, preco, disponivel, foto, codigoUsuario)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
              RETURNING *;
          `;
      const values = [
        roupa.nome,
        roupa.descricao || null,
        roupa.tamanho,
        roupa.tipo,
        roupa.preco,
        true,
        roupa.foto || null, //aqui o valor da roupa pode ser buffer da foto ou null, por que foto da roupa pode ser null
        roupa.codigoUsuario,
      ];
      const result = await conn.query(query, values);
      dados = result.rows[0];
    } catch (erro) {
      console.error(erro);
    } finally {
      conn.release();
    }
    return dados;
}

async function deleteRoupa(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    var query = await conn.query(
      "delete from roupa where codigo=$1 returning *",
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

async function getRoupasCadastradas(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from roupa where codigoUsuario=$1";
    const result = await conn.query(query, [codigo]);
    dados = result.rows;
    dados = dados.map(roupa => {
      if (roupa.foto) {
        const mimeType = pegarAssinatura(roupa.foto);
        roupa.foto = `data:${mimeType};base64,${roupa.foto.toString('base64')}`;
      } else {
        roupa.foto = "Imagens/default-placehorder.png"; 
      }
      return roupa;
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}  

async function getRoupasVendidas(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from roupa where codigoUsuario=$1 and disponivel=false";
    const result = await conn.query(query, [codigo]);
    dados = result.rows;
    dados = dados.map(roupa => {
      if (roupa.foto) {
        const mimeType = pegarAssinatura(roupa.foto);
        roupa.foto = `data:${mimeType};base64,${roupa.foto.toString('base64')}`;
      } else {
        roupa.foto = "Imagens/default-placeholder.png";  
      }
      return roupa;
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

async function getCalcas() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Calças';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

//---------------------------------------------------------------------------------------

async function getCamisas() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Camisas';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}


//-------------------------------------------------------------------------------------
async function getCalcados() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Calçados';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

//---------------------------------------------------------------------------------------

async function getBermudas() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Bermudas';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

//--------------------------------------------------------------------------------------
async function getVestidos() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Vestidos';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

//-------------------------------------------------------------------------------------

async function getShorts() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Shorts';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

//-----------------------------------------------------------------------------------------

async function getAgasalhos() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "SELECT * FROM roupa WHERE tipo = 'Agasalhos';";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}


async function getAllRoupas() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from roupa where disponivel=true;";
    const result = await conn.query(query);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString(
          "base64"
        )}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

async function updateRoupa(roupa) {
  const conn = await bd.conectar();
  let dados = null;

  try {
    const query = `
            UPDATE roupa
            SET nome = $1,
                descricao = $2,
                tamanho = $3,
                tipo = $4,
                preco = $5,
                foto = COALESCE($6, foto)
            WHERE codigo = $7
            RETURNING *;
        `;
    const values = [
      roupa.nome,
      roupa.descricao || null,
      roupa.tamanho,
      roupa.tipo,
      roupa.preco,
      roupa.foto,
      roupa.codigo,
    ];
    const result = await conn.query(query, values);
    dados = result.rows[0];
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

//Funções auxiliares
function pegarAssinatura(foto){ //Verifica se a imagem é png ou jpeg para converter para base64
  const assinatura = foto.toString('hex', 0, 4);
  if (assinatura == '89504e47'){
    return 'image/png';
  } else if (assinatura == 'ffd8ffe0' || assinatura == 'ffd8ffe1' || assinatura == 'ffd8ffe2') {
    return 'image/jpeg';
  } else {
    return 'application/octet-stream';
  }
}

async function getRoupaPeloCod(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from roupa where codigo=$1";
    const result = await conn.query(query, [codigo]);
    dados = result.rows;
    dados = dados.map(roupa => {
      if (roupa.foto) {
        const mimeType = pegarAssinatura(roupa.foto);
        roupa.foto = `data:${mimeType};base64,${roupa.foto.toString('base64')}`;
      } else {
        roupa.foto = "Imagens/semFoto.png";  
      }
      return roupa;
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
}

export default {
  createRoupa,
  deleteRoupa,
  getRoupasCadastradas,
  getRoupasVendidas,
  getAllRoupas,
  updateRoupa,
  getRoupaPeloCod,
  getCalcas, //
  getCamisas, //
  getCalcados, //
  getBermudas, //
  getVestidos, //
  getShorts, //
  getAgasalhos //
};
