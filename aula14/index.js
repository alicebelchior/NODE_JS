/*
PRROGRAMAÇÃO ASSÍNCRONA
- Códigos/Funções assíncronas quando executadas, nao bloqueiam a execução de outras linhas de código que vêm em seguida.
- Quando executadas, elas vão para 2º plano enquanto o programa continua interpretando as linhas seguintes
*/

//ex1: setTimeout permite que seja executada uma função depois de um determinado tempo passado como parâmetro
setTimeout(() => {
    console.log("Esperei 2,5 s")
}, 2500);

console.log("oi");