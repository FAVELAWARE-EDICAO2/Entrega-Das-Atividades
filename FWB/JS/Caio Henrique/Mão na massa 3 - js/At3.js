let numElementos = parseInt(prompt("Quantos números você quer somar?"));

let soma = 0;

for (let i = 0; i < numElementos; i++) {
   let numero = parceInt(prompt("Digite o número" + (i + i) + ":"));
   som += numero;
}
console.log("soma dos números é:", soma);
