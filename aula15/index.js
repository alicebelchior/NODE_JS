/*
A "PROMISE" é uma evolução das "callbacks"
 - Callback é uma função passada como parâmetro para outra função e quando essa outra função termina de executar o que ela tinha que fazer,
 ela chama o callback e ele executa o que está dentro dele

 - A Promise é uma promessa, ou seja, ou ela pode ser cumprida ou não (rejeitada).
*/
function cadastrarUsuario(){
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
          //logica para cadastrar o usuario
          
          var erro = false;  //false/true (teste)
          if (!erro) {
            resolve("Sucesso");
          } else {
            reject("Ocorreu um erro")
          }
        }, 2500)
    });
}

cadastrarUsuario()
.then((mensagem) =>{ //resolve
    console.log(mensagem);
})
.catch((mensagem) =>{ //reject
    console.log(mensagem);
})