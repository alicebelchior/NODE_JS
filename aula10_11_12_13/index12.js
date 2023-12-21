const fs = require("fs");

fs.readFile("./arquivo.json", "utf-8", (erro, dados) => {
    console.log(dados);
})