function calcularOperacao(numero1, numero2, operador) {
    let resultado;

    
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                console.log("Erro: Divisão por zero.");
                return;
            }
            break;
        default:
            console.log("Operador inválido.");
            return;
    }

    console.log(`Resultado: ${resultado}`);
}


let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let operador = prompt("Digite o operador (+, -, *, /): ");


calcularOperacao(numero1, numero2, operador);
