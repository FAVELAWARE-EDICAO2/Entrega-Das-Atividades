function verificarEstacao(mes) {
    if (mes >= 1 && mes <= 12) {
        if (mes >= 3 && mes <= 5) {
            console.log("Outono");
        } else if (mes >= 6 && mes <= 8) {
            console.log("Inverno");
        } else if (mes >= 9 && mes <= 11) {
            console.log("Primavera");
        } else {
            console.log("Verão");
        }
    } else {
        console.log("Mês inválido");
    }
}

// Testando o programa com diferentes meses
verificarEstacao(1); // Saída: Verão
verificarEstacao(4); // Saída: Outono
verificarEstacao(7); // Saída: Inverno
verificarEstacao(10); // Saída: Primavera
verificarEstacao(15); // Saída: Mês inválido
