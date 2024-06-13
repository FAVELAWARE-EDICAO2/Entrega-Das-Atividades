/* 3. Escreva um programa em JavaScript que receba uma
   lista de números inteiros fornecidos pelo usuário
   e calcule a soma de todos os elementos da lista.

 */
lista_numeros = prompt ("Por favor, insira um número")
let lista_numeros = [];
var sum  = lista_numeros.reduce(function(accumulator,value){
  return accumulator + value
  },0);
console.log(sum)
