
let numeros = [3, 5, 7, 9, 11];

numeros.push(13);

numeros.shift();

let indice9 = numeros.indexOf(9);

numeros.sort((a, b) => b - a);

numeros.reverse();

let filtrados = numeros.filter(num => num > 7);

let soma = numeros.reduce((acc, num) => acc + num, 0);

console.log("Array final:", numeros);
console.log("Soma dos elementos:", soma);
