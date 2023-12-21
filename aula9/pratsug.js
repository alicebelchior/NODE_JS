/*
Crie um programa que solicita aos usuários que insiram suas idades para verificar se eles são maiores de idade.
Você deseja garantir que o programa não quebre se o usuário inserir algo que não seja um número inteiro.
*/

// 1. Peça ao usuário para inserir sua idade.
// 2. Use um bloco `try` para tentar converter a entrada do usuário em um número inteiro.
const prompt = require("prompt-sync")();

try {
  const idade = parseInt(prompt("Digite sua idade: "));

  //função isNaN() determina se o valor é NaN ou não
  if (isNaN(idade)) {
    // 3. Se o usuário inserir algo que não seja um número inteiro, capture a exceção e exiba uma mensagem de erro, informando que a entrada é inválida.
    throw new Error("Insira uma idade válida (valor inteiro)");
  }

  // 4. Caso contrário, verifique se a idade é maior ou igual a 18 e exiba uma mensagem informando se o usuário é maior de idade ou não
  if (idade >= 18) {
    console.log("Maior de idade!");
  } else {
    console.log("Menor de idade!");
  }
} catch (erro) {
  console.error(`Sua idade não não está certa! ${erro.message}`);
}
