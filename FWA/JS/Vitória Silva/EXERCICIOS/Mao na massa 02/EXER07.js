let num1 = parseInt(prompt("insira seu primeiro numero"));
let num2 = parseInt(prompt("insira seu segundo numero"));
let char = prompt("digite seu simbolo matematico(+,-,/,* e %)")

let resultado

switch (char){
     case "+":
    resultado = num1 + num2;
    break
    case "-":
    resultado = num1 - num2;
    break
    case "*":
    break
    case "%":
    resultado = num1 % num2;
    break
    default:
        resultado = "Operador invalido";

}

console.log("O resultado é: ", resultado);