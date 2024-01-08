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

//Fazendo a promisse com "Async/Await"
async function main() {
    try {
        const documento = await baixarConteudo("Documento.pdf");
        console.log(`${documento} foi baixado com sucesso!`);

        const imagem = await baixarConteudo("Imagem.jpg");
        console.log(`${imagem} foi baixado com sucesso!`);

        const video = await baixarConteudo("Video.mp4");
        console.log(`${video} foi baixado com sucesso!`);
    } catch (erro) {
        console.error(`Problema no download: ${erro}`);
    }
}

//chamada de função assincrona
main()