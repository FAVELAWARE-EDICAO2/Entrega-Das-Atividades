/*Desenvolva um programa que aceite o número de um mês (1 a 12) e imprima a estação do ano correspondente, com base nas estações no Hemisfério Sul:

Verão: Janeiro (1), Fevereiro (2), Dezembro (12)
Outono: Março (3), Abril (4), Maio (5)
Inverno: Junho (6), Julho (7), Agosto (8)
Primavera: Setembro (9), Outubro (10), Novembro (11)
Se o número do mês não estiver no intervalo de 1 a 12, o programa deve imprimir "Mês inválido".
*/

//Numero do Mês
let estacao = 6;

//Condições Switch para as estações do ano
if(estacao < 1 || estacao > 12){
    console.log("Mes inválido");
}else{
    switch(estacao){
        case 1:
        console.log("Verão");
        break;
        case 2:
        console.log("Verão");
        break;
        case 3:
        console.log("Outono");
        break;
        case 4:
        console.log("Outono");
        break;
        case 5:
        console.log("Outono");
        break;
        case 6:
        console.log("Inverno");
        break;
        case 7:
        console.log("Inverno");
        break;
        case 8:
        console.log("Inverno");
        break;
        case 9:
        console.log("Primavera");
        break;
        case 10:
        console.log("Primavera");
        break;
        case 11:
        console.log("Primavera");
        break;
        case 12:
        console.log("Verão");
        break;
    }
}