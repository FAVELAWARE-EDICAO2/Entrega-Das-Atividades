const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarNota(nota) {
    let letra;

    switch (true) {
        case nota >= 9 && nota <= 10:
            letra = 'A';
            break;
        case nota >= 7 && nota < 9:
            letra = 'B';
            break;
        case nota >= 5 && nota < 7:
            letra = 'C';
            break;
        case nota >= 3 && nota < 5:
            letra = 'D';
            break;
        case nota >= 0 && nota < 3:
            letra = 'F';
            break;
        default:
            letra = 'Nota inválida';
    }

    return letra;
}

function main() {
    rl.question("Digite a nota (0 a 10): ", (nota) => {
        nota = parseFloat(nota);

        const letra = classificarNota(nota);
        console.log(`A nota ${nota} corresponde à letra ${letra}`);

        rl.close();
    });
}

main();
