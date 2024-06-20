/* 3. Escreva um programa em JavaScript que receba uma
   lista de números inteiros fornecidos pelo usuário
   e calcule a soma de todos os elementos da lista.

 */

let lista_numeros = [2,3,10];
var soma  = lista_numeros.reduce(function(accumulator,value){
  return accumulator + value
  },0);
console.log(soma)
