/* 1. Crie um programa em JavaScript que declare e
inicialize variáveis para armazenar os seguintes
tipos de dados: 
1) Um número inteiro.
2) Um número de ponto flutuante.
3) Uma string.
4) Um booleano.
5) Um array contendo pelo menos 3 elementos de tipos diferentes.
6) Um objeto com pelo menos 3 pares de chave-valor, onde as chaves são strings e os valores podem ser de qualquer tipo.
Em seguida, imprima cada uma das variáveis declaradas no console, indicando o tipo de dado que está sendo impresso.
*/
let numeroInteiro = 10;
let numeroFlutuante = 3.14;
let string = "Olá, desenvolvedores!";
let booleano = true;
let array = [1, "dois", false];
let objeto = {
    chave1: "valor1",
    chave2: 42,
    chave3: true
};

console.log("Número inteiro:", numeroInteiro, typeof numeroInteiro);
console.log("Número de ponto flutuante:", numeroFlutuante, typeof numeroFlutuante);
console.log("String:", string, typeof string);
console.log("Booleano:", booleano, typeof booleano);
console.log("Array:", array, typeof array);
console.log("Objeto:", objeto, typeof objeto);
