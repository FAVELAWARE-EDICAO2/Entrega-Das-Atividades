/* 7. Dado um array de strings, realize as seguintes operações:

Remova todas as strings que tenham menos de 5 caracteres.
Converta todas as strings restantes para letras maiúsculas.
Ordene as strings em ordem alfabética.
Mostre o array resultante após essas operações.
 */

let palavras = ["banana", "maça", "laranja", "uva", "pera"];

console.log("Palavras com 5 caracteres ou mais:")
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length < 5) {
        palavras.splice(i, 1);
        i--;
    }
}
palavras.sort();
for (let i = 0; i < palavras.length; i++) {

    console.log(palavras[i]);
}