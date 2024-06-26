let numeros = [];// Declarei um array vazio
for (i = 0; i < 5; i++) { //fiz um for pra preencher o array
  numeros[i] =  parseInt(prompt("insira um numero"));
  console.log(numeros[i])
}
let soma;
for(i = 0; i <5;i++){
  soma += numeros[i]//i = 0 / soma = 0/
  //soma = soma + numeros[i] / 0 = 0 + 1   
  
}
console.log(soma)
