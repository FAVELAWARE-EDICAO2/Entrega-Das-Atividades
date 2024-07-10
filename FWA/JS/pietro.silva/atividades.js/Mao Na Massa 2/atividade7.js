

let num1 = parseFloat(prompt("5:"));
let num2 = parseFloat(prompt("2"));
let operador = prompt("/");


function calcular(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Divisão por zero não é possível.";
            }
        default:
            return "Operador inválido";
    }
}

// Calcula e exibe o resultado
let resultado = calcular(num1, num2, operador);
console.log("Resultado: " + resultado);
