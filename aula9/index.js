/*
TRATAMENTO DE EXCEÇÕES
- Exceção é um erro de execução do código
*/
const prompt = require("prompt-sync")();

try {
  var a = parseInt(prompt("Digite o valor de a: "));
  var b = parseInt(prompt("Digite o valor de b: "));
  var resultado = dividir(a, b);

  console.log(resultado);

} catch (erro) {
  console.log("A operação não opde ser realizada. " + erro.message);
}

function dividir(a, b) {

  if (b == 0) {
    //criação do objeto error que sera enviado para o parametro passado ao catch
    throw new Error("Divisão por zero não existe!");
  }
  return a / b;
}