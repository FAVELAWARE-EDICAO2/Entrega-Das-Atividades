/* 4.Crie um programa em JavaScript que faça o seguinte:

✔ Crie um array chamado números que contenha os números: 3, 5, 7, 9, 11.
✔ Adicione o número 13 ao final do array.
✔ Remova o primeiro elemento do array.
✔ Encontre o índice do número 9 no array.
✔ Ordene o array em ordem decrescente.
✔ Inverta a ordem dos elementos no array.
✔ Filtre os números do array para obter apenas aqueles maiores que 7.
✔ Some todos os elementos do array.
✔ Imprima o array final e a soma dos elementos.
 */

let numeros = [3, 5, 7, 9, 11];
numeros.push(13);
numeros.shift();

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] == 9) {
        console.log(i, "                  (Índice do número 9 no array)")
    }
}

numeros.sort((a, b) => b - a);
console.log(numeros, "(Order decresente)");
numeros.sort((a, b) => a - b);
console.log(numeros, "(Order cresente)");

const MaiorQue7 = numeros.filter(function (numeros) {
    return numeros >= 7;
})
console.log(MaiorQue7, "   (maiores que 7)");
var soma = MaiorQue7.reduce((accumulator, value) => accumulator + value, 0);
console.log(soma, "                 (Soma de todos os elementos)")




