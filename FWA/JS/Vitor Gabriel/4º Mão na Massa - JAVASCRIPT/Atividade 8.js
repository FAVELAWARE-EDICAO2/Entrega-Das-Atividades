/* Escreva um programa que peça ao usuário um número inteiro
   e exiba a tabuada desse número (de 1 a 10) usando um loop
   for.
 */

   const numero = 7;

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}