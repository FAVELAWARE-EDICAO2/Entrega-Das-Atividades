let numeros = [];// Declarei um array vazio
for (i = 0; i < 5; i++) { //fiz um for pra preencher o array
  numeros[i] =  parseInt(prompt("insira um numero"));
  console.log(numeros[i])
}
let soma;// Declaração de variavel 
for(i = 0;i<5;i++){//outro for pra somar 
  soma = numeros[i]+=numeros[i]
} //Este for 

console.log(soma)