const axios = require("./api.js");

//MÉTODO GET
async function carregarEstados() {

    try {

        var response = await axios.api.get('/estados'); //esse comando pega todos os estados do db.json
        //Quando fazemos uma requisição usando "AXIOS" ele SEMPRE retorna uma "PROMISE" 
        console.log(response.data);
    } catch(erro) {
        console.log("Ocorreu um erro na busca do(s) estado(s)");
    }
}

async function alterarEstado() {
    try {
        var response = await axios.api.put("/estados/ES", {
            nome: "Espírito Santo"
        });
    } catch (erro) {
        console.log("Ocorreu um erro ao alterar o estado");
    }
}

//MÉTODO POST
async function incluirEstado() {
    try {
        var response = await axios.api.post('/estados', {
            id: 'BA',
            nome: "Bahia"
        });

        console.log(response.data);
    } catch (erro) {
        console.log("Ocorreu um erro na inclusão do novo estado")
    }
}

//MÉTODO DELETE
function apagarEstado() {
    axios.api.delete('/estados/SP')
    .then(() =>{
        console.log('Estado deletado com sucesso!');
    })
    .catch((erro) =>{
        console.log('Ocorreu um erro ao apagar o estado');     
    });
}

// carregarEstados();
// alterarEstado();
// incluirEstado();
apagarEstado();