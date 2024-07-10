/* 10.	Desenvolva um programa que aceite o número de
um mês (1 a 12) e imprima a estação do ano
correspondente, com base nas estações no
Hemisfério Sul:

a.	Verão: Janeiro (1), Fevereiro (2), Dezembro (12)
b.	Outono: Março (3), Abril (4), Maio (5)
c.	Inverno: Junho (6), Julho (7), Agosto (8)
d.	Primavera: Setembro (9), Outubro (10), Novembro (11)
Se o número do mês não estiver no intervalo de 1 a 12, o programa deve imprimir "Mês inválido".
 */

let Estações = 10;
switch (Estações) {
    case 1:
    case 2:
    case 12:
        console.log("Verão");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Inverno");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido.");

}
