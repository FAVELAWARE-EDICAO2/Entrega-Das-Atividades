
function verificarNumero(numero) {
    if (numero > 0) {
        console.log(numero + " é positivo");
    } else if (numero < 0) {
        console.log(numero + " é negativo");
    } else {
        console.log(numero + " é zero");
    }
}

verificarNumero(5);
verificarNumero(-9); 
verificarNumero(0);  
verificarNumero(9);  