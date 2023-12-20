//manipulação de string
var str = "       Instituto Federal de Espírito Santo      ";

//o metodo "trim" remove espaços em branco no início e no final de uma string

console.log(str.trimStart());
console.log(str.trimEnd());

str = str.trim();
console.log(str);

console.log(str.length + " caracteres");

//string toda em maiuscula/minuscula
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//substituição de alguma parte da string
console.log(str.replace("Espírito Santo", "Rio de Janeiro"));

//métodos "startsWith/endsWith" retornam V/F de acordo com a solicitação
if(str.endsWith("Santa")) {
          console.log("Termina com a palavra 'Santa'");
} else {
          console.log("Termina com a palavra 'Santo'");

}

if (str.startsWith("I")) {
  console.log("Começa com a letra 'I'");
} else {
  console.log("Começa com a letra 'U'");
}

/*
          - O método "split" divide uma string em um array de substrings, com base em um separador especificado
          - O separador/divisor especifico sera o espaço em branco entre as palavras
*/
console.log(str.split(" "));

//o método "includes" vai testar se a string possui um valor passado para o metodo para ele testar se ela possui esse parametro
if(str.includes("Federal")) {
          console.log("A string possui a palavra 'Federal");
}