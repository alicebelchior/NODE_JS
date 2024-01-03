/*
Função "Callback" é uma função passada como parâmetro para  uma outra função
*/
const prompt = require("prompt-sync")();

function obterNome(Callback) {
    var nome = prompt("Digite seu nome:");
    Callback(nome);

    //"obterNome" recebe como parametro a função "callback";
    //depois de pegar o "nome" do usuario, eu chamo a função "callback", passando o "nome" como parametro
}

//ao chamar a função "obterNome", tenho a opção de passar como parametro a função "callback"
//como a "callback" tem "nome" como parametro, esse argumento vai ser usado em "obterNome" 
obterNome((nome) => {
    console.log(nome);
});