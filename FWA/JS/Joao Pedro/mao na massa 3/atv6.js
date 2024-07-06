let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros = numeros.filter(num => num % 2 !== 0);

numeros = numeros.map(num => num * 2);

numeros.sort((a, b) => b - a);

console.log("Array resultante:", numeros);
