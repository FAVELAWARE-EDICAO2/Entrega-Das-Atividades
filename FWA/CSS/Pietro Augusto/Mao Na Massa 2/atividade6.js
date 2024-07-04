/**
Crie um programa que aceite um número de 1 a 7 representando os dias da semana, onde 1 é "Domingo" e 7 é "Sábado".
 O programa deve imprimir o nome correspondente do dia usando uma instrução switch/case.
  Se o número estiver fora do intervalo, o programa deve imprimir "Número inválido".
 */
let diadaSemana = 6

switch (diadaSemana){
    case 1:
    console.log("domingo")
    break;
    case 2:
    console.log("segunda")
    case 3:
    console.log("terca")
    break 
    case 4:
    console.log("quarta")
    break 
    case 5:
    console.log("quinta")
    break 
    case 6:
    console.log("sexta")
    break 
    case 7:
    console.log("sabado")
    break
}

if (diadaSemana  < 8){
    console.log("numero encontrado")
 }
 else if( diadaSemana >8){
    console.log("erro!!!!")
 }



