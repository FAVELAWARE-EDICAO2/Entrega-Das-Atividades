const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function semaforo(cor) {
    switch (cor.toLowerCase()) {
        case 'vermelho':
            console.log('Pare');
            break;
        case 'amarelo':
            console.log('Atenção');
            break;
        case 'verde':
            console.log('Siga');
            break;
        default:
            console.log('Cor inválida');
    }
}

rl.question('Digite a cor do semáforo (vermelho, amarelo, verde): ', (cor) => {
    semaforo(cor);
    rl.close();
});
