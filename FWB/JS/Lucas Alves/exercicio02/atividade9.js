function acaoSemaforo(cor) {
    
    switch (cor) {
        case "vermelho":
            console.log("pare");
            break;
        case "amarelo":
            console.log("Aguarde");
            break;
        case "verde":
            console.log("Siga");
            break;
        default:
            console.log("Cor inválida");
    }
}


var corSemaforo = prompt("Digite a cor do semáforo (vermelho, amarelo ou verde): ").toLowerCase();


acaoSemaforo(corSemaforo);

