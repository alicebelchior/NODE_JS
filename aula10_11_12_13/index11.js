const fs = require("fs");

//escrita de arquivo
//"() =>" é uma arrow function ou função anonima
fs.writeFile("./arquivoTexto", "Este arquivo é um arquivo criado programaticamente no Node.js", (erro) => {
    if (erro){
        console.log(erro.message);
        return;
    }

    console.log("Arquivo escrito com sucesso");
});

//leitura de arquivo
fs.readFile("./arquivoTexto", "utf-8", (erro, dados) => {
    if (erro){
        console.log(erro.message);
        return;
    }

    console.log(dados);
})