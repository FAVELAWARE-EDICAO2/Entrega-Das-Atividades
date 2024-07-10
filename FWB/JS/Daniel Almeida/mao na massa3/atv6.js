let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)
console.log("------")

let numerosImpares = numeros.filter(numero => numero % 2 !== 0);
console.log(numerosImpares)
console.log("------")

let numerosMultiplicados = numerosImpares.map(numero => numero * 2);

console.log(numerosMultiplicados);
console.log("------")

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numerosMultiplicados[i]);}
