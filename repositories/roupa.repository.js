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
  
      dados.map((roupa) => {
        if (roupa.foto) {
          roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString("base64")}`;
        }
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
    var query = await conn.query(
      "select * from roupa where codigoUsuario=$1 and disponivel=false",
      [codigo]
    );
    console.log(query.rows);
    dados = query.rows;
    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString("base64")}`;
      }
    });
    console.log(dados);
  } catch (erro) {
    console.log(erro);
  } finally {
    conn.release();
  }
  return dados;
}

async function getAllRoupas() {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from roupa;";
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

async function getRoupasPeloNome(nome) {
  const conn = await bd.conectar();
  let dados = null;

  try {
    const query = "select * from roupa where nome ILIKE $1;";
    const values = [`%${nome}%`];
    const result = await conn.query(query, values);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString("base64")}`;
      }
    });
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }

  return dados;
}

async function getRoupasPeloTipo(tipo) {
  const conn = await bd.conectar();
  let dados = null;

  try {
    const query = "select * from roupa where tipo ILIKE $1;";
    const values = [`%${tipo}%`];
    const result = await conn.query(query, values);
    dados = result.rows;

    dados.map((roupa) => {
      if (roupa.foto) {
        roupa.foto = `data:image/png;base64,${Buffer.from(roupa.foto).toString("base64")}`;
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
                foto = $6,
                codigoUsuario = $7
            WHERE codigo = $8
            RETURNING *;
        `;
    const values = [
      roupa.nome,
      roupa.descricao || null,
      roupa.tamanho,
      roupa.tipo,
      roupa.preco,
      roupa.foto || null,
      roupa.codigoUsuario,
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

export default {
  createRoupa,
  deleteRoupa,
  getRoupasCadastradas,
  getRoupasVendidas,
  getAllRoupas,
  getRoupasPeloNome,
  getRoupasPeloTipo,
  updateRoupa,
};
