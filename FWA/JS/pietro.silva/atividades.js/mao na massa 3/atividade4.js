let numeros = [3, 5, 7, 9, 11];
let pinguim = [9,4,7,6,8,4,7]
console.log(numeros)
numeros.push(13)
console.log(numeros)
numeros.shift()
console.log(numeros)
console.log(numeros.indexOf(9))
console.log(numeros.sort((a,b) => b - a))
console.log(numeros.reverse())
function maiorQueSete(numeros){
    return numeros > 7;
}
console.log(numeros.filter(maiorQueSete))

let soma = 0;
for(let i = 0; i <numeros.length;i++){
  soma += numeros[i]
}
console.log(Number(soma))

console.log(numeros)
console.log(soma)