// Função para calcular a soma de uma lista de números
function calcular(numbers) {
    return numbers.reduce((soma, num) => soma + num, 0);
}

// Solicitar ao usuário para inserir uma lista de números
let input = prompt("Digite uma lista de números inteiros separados por vírgula:");

// Converter a entrada em um array de inteiros
let numberArray = input.split(',').map(num => parseInt(num.trim(), 10));

// Verificar se todos os elementos são números válidos
if (numberArray.some(isNaN)) {
    console.log("Por favor, insira uma lista válida de números inteiros.");
} else {
    // Calcular a soma dos elementos
    let soma = calcular(numberArray);
    
    // Exibir o resultado
    console.log("A soma de todos os elementos da lista é: " + soma);
}
