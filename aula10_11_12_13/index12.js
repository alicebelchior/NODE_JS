const fs = require("fs");

fs.readFile("./arquivo.json", "utf-8", (erro, dados) => {
    
    //parse pega o conteudo de texto do arquivo JSON 
    //e vai transformar em uma lista de objetos do JavaScript
    var lista = JSON.parse(dados);

    console.log(lista.filmes[0].sinopse);
})
 /*
 a saida desse código é um objeto (por causa da abertura de chave), 
 dentro do qual tem uma lista "filmes" (por causa da abertura de colchete)
 e, por fim, dentro dessa lista tem varios objetos que representam vários filmes diferentes.
 */