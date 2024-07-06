const numeros = [3, 5, 7, 9, 11 ]

numeros.push(13)



for (numero of numeros){
    console.log(numero)
}
console.log("-------")
numeros.shift()

for (numero of numeros){
    console.log(numero)
}console.log("-------")


for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);}

let indice = numeros.indexOf(9)
console.log("o indice do numero 9 é:",indice)
console.log("-------")

numeros.sort((a, b ) => b - a);

console.log(numeros);
console.log('------')
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma);