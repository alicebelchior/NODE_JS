const fs = require("fs");

//função para ler as tarefas do arquivo JSON
function lerTarefas(){
    try {

        //ler o arquivo
        const arquivo = fs.readFileSync("./tarefas.json", "utf-8");

        //transformar o conteudo em objetos JS
        const tarefas = JSON.parse(arquivo);
        console.log("Lista das tarefas: ");
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });

    } catch (erro) {
        console.error("Erro ao ler a lista de tarefas.", erro.message)
    }
}

//função p/ add uma nova tarefa à lista no arquivo JSON
function criarTarefas(novaTarefa){
    try {

        //criar o arquivo
        const arquivo = fs.readFileSync("./tarefas.json", "utf-8");
        const tarefas = JSON.parse(arquivo);

        //adicionando um estado à lista
        tarefas.push(novaTarefa);

        //transformar o objeto JS em formato JSON
        fs.writeFileSync("tarefas.json", JSON.stringify(tarefas, null, 2));
        console.log(`Tarefa "${novaTarefa} adicionada com sucesso`);
    } catch (erro) {
        console.error(`Ocorreu um erro ao adicionar a a tarefa ${erro.message}`)
    }
}

//Exemplos de uso
lerTarefas();
criarTarefas("Fazer compras");
lerTarefas();