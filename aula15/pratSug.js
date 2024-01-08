function baixarConteudo(nomeConteudo) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando o download de ${nomeConteudo}`);

         //Simulação de tempo de download de 4 segundos
         setTimeout(() =>{
            const sucesso = true; //simula se o download foi bem sucedido
            
            if(sucesso) { //se sim...
                console.log(`Download concluído: `);
                resolve(nomeConteudo); //Resolvendo a Promise
            }else { //senão
                const erro = `Não foi possível baixar ${nomeConteudo}`
                console.error(erro);
                reject(erro); //Rejeitando a Promise em caso de erro
            }
         }, 4000)
    });
}

/*
//Chamando a função com promises
baixarConteudo("Documento.pdf")
.then((nomeConteudo) =>{
    console.log(`${nomeConteudo} foi baixado com sucesso!`);
})
.catch((erro) =>{
    console.error(`Problema no download: ${erro}`);
})
*/

//Encadeando múltiplos downloads utilizando .then
baixarConteudo("Imagem.pdf")
.then((nomeConteudo) =>{
    console.log(`${nomeConteudo} foi baixado com sucesso!`);
    return baixarConteudo("Video.mp4");
})
.then((nomeConteudo) =>{
    console.log(`${nomeConteudo} foi baixado com sucesso!`);
})
.catch((erro) =>{
    console.error(`Problema no download: ${erro}`);
})