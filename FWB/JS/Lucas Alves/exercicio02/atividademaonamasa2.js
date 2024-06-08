
function verificarNumero(numero) {
    if (numero > 0) {
        console.log(numero + " é positivo");
    } else if (numero < 0) {
        console.log(numero +" é negativo");
    } else {
        console.log(numero + " é zero");
    }
    
}
//  função  exemplos
verificarNumero(4);    // Deve imprimir "5 é positivo"
verificarNumero(-3);   // Deve imprimir "-3 é negativo"
verificarNumero(0);    // Deve imprimir "0 é zero"