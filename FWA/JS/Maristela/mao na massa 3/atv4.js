const números = [3, 5, 7, 9, 11];


// Adiciona o número 13 ao final do array
números.push(13);

console.log(números); // Imprime o array atualizado: [3, 5, 7, 9, 11, 13]


// Remove o primeiro elemento do array
const primeiroElemento = números.shift();

console.log(números); // Imprime o array atualizado: [5, 7, 9, 11]
console.log(primeiroElemento); // Imprime o elemento removido: 3



// Encontra o índice do número 9 no array
const índice = números.indexOf(9);

if (índice !== -1) {
  console.log(`O número 9 está no índice ${índice}`);
} else {
  console.log("O número 9 não está presente no array.");
}



