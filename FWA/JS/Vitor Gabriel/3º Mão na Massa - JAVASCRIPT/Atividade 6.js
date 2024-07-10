/* 6. Dado um array de números inteiros, realize as seguintes operações:

Remova todos os números pares do array.
Multiplique cada número ímpar por 2.
Ordene os números resultantes em ordem decrescente.
Mostre o array resultante após essas operações.

*/
let numerosInteiros = [1, 2, 3, 6, 12, 16, 20, 21];
let mult = []; // Array onde vamos armazenar os números ímpares multiplicados por 2

for (let i = 0; i < numerosInteiros.length; i++) {
    if (numerosInteiros[i] % 2 == 0) {
        numerosInteiros.shift(); // Remove o elemento par
        i--; // Decrementa o índice para corrigir o deslocamento causado pela remoção
    } else {
        let dobrado = numerosInteiros[i] * 2; // Se for ímpar, multiplica por 2
        mult.push(dobrado); // Adiciona o resultado ao array mult
    }
}

mult.reverse(); // Inverte a ordem dos elementos no array mult

console.log(mult); // Imprime o array mult invertido
