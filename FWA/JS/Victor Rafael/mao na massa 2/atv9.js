function acaoSemaforo() {
    const cor = prompt("Digite a cor do semáforo (vermelho, amarelo, verde):").toLowerCase();
    let acao;

    switch (cor) {
        case 'vermelho':
            acao = 'Pare';
            break;
        case 'amarelo':
            acao = 'Atenção';
            break;
        case 'verde':
            acao = 'Siga';
            break;
        default:
            acao = 'Cor inválida';
    }
    console.log(acao);
}

// Chame a função para executar
acaoSemaforo();
