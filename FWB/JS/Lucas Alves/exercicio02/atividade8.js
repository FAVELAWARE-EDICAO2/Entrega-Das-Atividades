const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarNota(nota) {
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida.");
        return;
    }

    let classificacao;

    
    switch (true) {
        case (nota >= 9 && nota <= 10):
            classificacao = 'A';
            break;
        case (nota >= 7 && nota < 9):
            classificacao = 'B';
            break;
        case (nota >= 5 && nota < 7):
            classificacao = 'C';
            break;
        case (nota >= 3 && nota < 5):
            classificacao = 'D';
            break;
        case (nota >= 0 && nota < 3):
            classificacao = 'F';
            break;
        default:
            console.log("Nota inválida.");
            return;
    }

    console.log(`Classificação: ${classificacao}`);
    rl.close();
}


rl.question("Digite a nota (0 a 10): ", function(nota) {
    
    classificarNota(parseFloat(nota));
});
