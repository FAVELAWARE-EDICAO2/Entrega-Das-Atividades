let numeros = [9,8,7,6,5,4,3,2,1] // declaração do array
let contador = 0
for(i = 0; i < numeros.length; i++){ // peercorrendo o array e pegando sseu indices começando do 0 ate o 8

    for(j = 1; j <= numeros[i]; j++){ //percorre ate o numero do indice e faz o modulo  pra verificar se o resto é igual a zero// // tambem faz a função de dividir o numero ate o i
       if(numeros[i] % j == 0){
        contador++ 
       }
 }
if(contador == 2){
    console.log(`${numeros[i]} sua posição é:${i}`)
}
    contador = 0 //zerando o contador pra que ele possa repetir vazio e guardar apenas dois valores novamente

}