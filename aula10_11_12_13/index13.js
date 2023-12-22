var estados = {
    estados:[
        {
            sigla: "ES",
            nome: "Espírito Santo"
        },
        {
            sigla: "MG",
            nome: "Minas Gerais"
        },
        {
            sigla: "RJ",
            nome: "Rio de Janeiro"
        }
    ]
}

//stringify pega o conteudo do objeto "estado" e transforma em formato JSON 
var conteudo = JSON.stringify(estados);

//adicionando um estado à lista
estados.estados.push({
    sigla: "SP",
    nome: "São Paulo"
})

fs.writeFile('./db.json', conteudo, (erro) =>{
/*
o objeto "estado" foi transformado no formato JSON e passado para a var conteudo
e o fs.writeFile esta pegando esse conteudo e escrevendo dentro do arquivo "db.json" 
*/
})
