const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Estacoes(estacao) {
    // Converte a entrada para um número
    estacao = parseInt(estacao, 10);

    switch (estacao) {
        case 12:
        case 1:
        case 2:
            console.log('Voce esta no verao');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Voce esta no outono');
            break;
        case 6:
        case 7:
        case 8:
            console.log('voce esta no inverno');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Voce esta na primavera');
            break;
        default:
            console.log('numero invalido');
    }
}

rl.question('Digite um numero e vera qual estaçao ele é (de 1 ao 12): ', (estacao) => {
    Estacoes(estacao);
    rl.close();
});
