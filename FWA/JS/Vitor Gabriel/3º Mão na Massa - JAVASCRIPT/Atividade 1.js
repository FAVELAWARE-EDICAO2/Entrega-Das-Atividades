/* 1. Faça um programa que preencha um vetor com 9
   números inteiros, calcule e mostre os números primos
   e suas respectivas posições.*/

let numeros = [2.29,7,3,4,5,6,100,97];

let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares);