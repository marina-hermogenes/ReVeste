import usuarioServices from "../services/usuario.services.js"

async function createUsuario (req, res){
    const email = req.body.email
    const senha = req.body.senha
    const nome = req.body.nome
    const dataNasc = req.body.dataNasc
    const telefone = req.body.telefone
    let chavePix = req.body.chavePix

    const texto = "Os seguintes campos precisam ser preenchidos: "
    let tudoCerto = true
    let campos = []

    if (email == ""){
        campos.push("Email")
        tudoCerto = false
    }
    if (senha == ""){
        campos.push("Senha")
        tudoCerto = false
    }
    if (nome == ""){
        campos.push("Nome")
        tudoCerto = false
    }
    if (dataNasc == ""){
        campos.push("Data de nascimento")
        tudoCerto = false
    }
    if (telefone == ""){
        campos.push("Telefone")
        tudoCerto = false
    } 
    if (chavePix == ""){
        chavePix = null
    }

    let lista = "<ul>"; 
    campos.forEach(campo => {
        lista += `<li>${campo}</li>`
    });
    lista += "</ul>";

    if (tudoCerto){
        const dados = await usuarioServices.createUsuario({email, senha, nome, dataNasc, telefone, chavePix})
        res.send(dados)
    } else {
        res.send(texto + lista)
    }
}

export default {createUsuario}