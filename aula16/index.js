function registrarUsuario() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var erro = true; 
            //var erro = false => resolve
            //var erro = true => reject

            if(!erro) {
                resolve({time: 5, message: "Sucesso"});
            } else {
                reject();
            }
        }, 2000)
    })
}

/*
registrarUsuario()
.then((dados) =>{ //resolve
    console.log(dados.time);
    console.log(dados.message);
})
.catch(() =>{ //reject
    console.log("Ocorreu um erro ao registrar o usuário");
}
*/

//OUTRA FORMA DE RESOLVER A "PROMISE" COM "ASYNC E AWAIT"
async function main() {

    try {
        var dados = await registrarUsuario();
        // o "await" faz com que o JavaScript espere o resultado completo da "promise" antes de seguir executando as outras linhas de código
        console.log(dados);
    } catch (erro) {
    console.log("Ocorreu um erro ao registrar o usuário");
    }
}

main();