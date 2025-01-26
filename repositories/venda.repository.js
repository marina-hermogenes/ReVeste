import bd from "./bd.js";
  
async function getVenda(codigo) {
    const conn = await bd.conectar();
    let dados = null;
    try {
      const query = await conn.query(
          'select venda.codigo, roupa.nome, roupa.foto, endereco.bairro, endereco.numero, endereco.cidade, endereco.estado, venda.horario, venda.mensagem from venda, endereco, roupa where venda.codigoUsuario=$1 and endereco.codigo = venda.codigoEndereco and roupa.codigoVenda = venda.codigo',
          [codigo]
        );
      console.log(query.rows);
      dados = query.rows;
      dados = dados.map(venda => {
        if (venda.foto) {
          const mimeType = pegarAssinatura(venda.foto);
          venda.foto = `data:${mimeType};base64,${venda.foto.toString('base64')}`;
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
  
export default {
    getVenda
};