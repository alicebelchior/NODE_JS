// criar uma função que verifica se uma palavra é um palíndromo

//a função ePalindromo verifica se uma palavra é um palíndromo
function ePalindromo(palavra) {
  //Transformar em minúsculas para comparação
  const palavraLimpa = palavra.toLowerCase();

  // Reverter a string
  const palavraRevertida = palavraLimpa.split("").reverse().join("");

  // Verificar se a palavra limpa = palavra revertida
  return palavraLimpa === palavraRevertida;
}

// Testar com algumas palavras
const palavrasTeste = [
  "arara",
  "banana",
  "radar",
  "javascript",
  "reconocer",
  "palindrome",
];

palavrasTeste.forEach((palavra) => {
  const result = ePalindromo(palavra)
    ? " é um palíndromo"
    : " não é um palíndromo";
  console.log(`A palavra "${palavra}" ${result}.`);
});