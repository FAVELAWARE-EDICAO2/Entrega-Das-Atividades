/* 3.	Crie um programa que dada uma idade classifica a 
faixa etária como "Criança" (0 a 12 anos),
"Adolescente" (13 a 17 anos), "Adulto" (18 a 64 anos)
ou "Idoso" (65 anos ou mais). Se a idade
for inválida (números negativos, não inteiros ou
fora do escopo), deve imprimir "Idade inválida". */

let idade = 10
if (idade >= 65) {
    console.log("Idoso");
} else if (idade >= 18) {
    console.log("Adulto");

} else if (idade >= 13) {
    console.log("Adolescente");
} else if (idade > 1) {
    console.log("Criança");
}