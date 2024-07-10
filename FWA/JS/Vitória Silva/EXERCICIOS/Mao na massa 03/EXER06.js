
// 6. Dado um array de números inteiros, realize as seguintes operações:

// Remova todos os números pares do array.
// Multiplique cada número ímpar por 2.
// Ordene os números resultantes em ordem decrescente.
// Mostre o array resultante após essas operações.

let numbers = [1, 2, 6, 9, 7];
let numImpares = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) { 
  }
else{
    numImpares.push(numbers[i])

}
}
console.log(numImpares)
for(y = 0;y < numImpares.length; y++){
    let multi = 2 * numImpares[y];
       console.log(multi)
}

