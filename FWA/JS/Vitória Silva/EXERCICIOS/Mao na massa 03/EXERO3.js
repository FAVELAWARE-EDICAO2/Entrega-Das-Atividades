let numeros = [];
for (i = 0; i < 5; i++) {
  numeros[i] =  parseInt(prompt("insira um numero"));
  console.log(numeros[i])
}
let soma;
for(i = 0;i<5;i++){
  soma = numeros[i]+=numeros[i]
  
}

console.log(soma)
// for(){}