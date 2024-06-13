/* 7. Dado um array de strings, realize as seguintes operações:

Remova todas as strings que tenham menos de 5 caracteres.
Converta todas as strings restantes para letras maiúsculas.
Ordene as strings em ordem alfabética.
Mostre o array resultante após essas operações.
 */

let strings = ["banana","maça", "laranja", "uva", "pera"];
console.log(strings[0].length)

for(let i = 0; i < String.length;i++ ){
    if(strings[i].length < 5){
        strings.slice(i, 1);
        i--;
    }
}
for (let i =0; i < 10; strings.length; i++ ){
    console.log(strings[i]);
} 