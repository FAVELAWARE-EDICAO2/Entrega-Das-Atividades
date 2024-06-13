function calculadora(num1, num2, operador) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Divisão por zero não é válido";
            }
            break;
        default:
            resultado = "Operador inválido";
    }
    return resultado;
}

console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 0, '/')); // não deverar ir 
console.log(calculadora(10, 5, 'x')); // inválido