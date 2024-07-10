/* 1. Faça um programa que preencha um vetor com 9
   números inteiros, calcule e mostre os números primos
   e suas respectivas posições.*/

let numeros = [
  1,3,2,5,7,
];

let numerosPares = numeros.filter(function(numero) {
  return numero % 1 === 0;
});

console.log(numerosPares);