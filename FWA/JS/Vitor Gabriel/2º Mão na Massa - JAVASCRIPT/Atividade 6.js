/* 6.	Crie um programa que aceite um número de 1 a 7
representando os dias da semana, onde 1 é
"Domingo" e 7 é "Sábado". O programa deve 
imprimir o nome correspondente do dia usando uma instrução switch/case. Se o número estiver fora do intervalo, o programa deve imprimir "Número inválido". */

let DiaDaSemana = 1;
switch (DiaDaSemana) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-Feira")
        break;
    case 3:
        console.log("Terça-Feira")
        break;
    case 4:
        console.log("Quanta-Feira")
        break;
    case 5:
        console.log("quinta-Feira")
        break;
    case 6:
        console.log("Sexta-Feira")
        break;
    case 7:
        console.log("Sabado")
        break;
    default:
        console.log("Número inválido, Digite um número válido.")
        break;
}