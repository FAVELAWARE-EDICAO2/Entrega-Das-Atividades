/*Crie um programa que aceite um número de 1 a 7 representando os dias da semana, onde 1 é "Domingo" e 7 é "Sábado". 
O programa deve imprimir o nome correspondente do dia usando uma instrução switch/case. Se o número estiver fora do intervalo,
 o programa deve imprimir "Número inválido".*/



 var hoje = 7;
if(hoje < 1 || hoje > 7){
    console.log("Numero inválido para semama")
}else{
 switch (hoje){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
 }
}