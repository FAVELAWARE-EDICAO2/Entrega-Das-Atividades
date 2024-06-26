function classificaNota(nota) {
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
            classificacao = 'Nota inválida';
    }
    return classificacao;
}

// Exemplo de uso
console.log(classificaNota(8)); // B
console.log(classificaNota(11)); // Nota inválida
