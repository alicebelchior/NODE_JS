function baixarConteudo(nomeConteudo, callback) {
    console.log("Iniciando o download de " + nomeConteudo);
   //Simulação de tempo de download de 5 segundos
   setTimeout(() => {
    console.log(nomeConteudo + " foi baixado com sucesso");

    /*
    o "baixarConteudo" simula o download de um conteúdo e chama
    a função de callback (callbackConcluirDownload) quando o download é concluído
    */
    callback(null, nomeConteudo); //indica que o download foi concluido
   }, 5000);
}

// função "callback" que sera chamada apos o termino do download
function callbackConcluirDownload(erro, nomeConteudo) {
    if (erro) {
        return console.log("Erro ao baixar " + nomeConteudo + ":" + erro.message);
    } else {
        return console.log("Download de " + nomeConteudo + " concluido com sucesso!")
    }
}

//Usando a função baixarConteudo com callbacks
baixarConteudo("Documento.pdf", callbackConcluirDownload);
baixarConteudo("Imagem.jpg", callbackConcluirDownload);
baixarConteudo("Video.mp4", callbackConcluirDownload);