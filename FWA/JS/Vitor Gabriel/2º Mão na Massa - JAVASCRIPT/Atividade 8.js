/* 8.	Escreva um programa que receba uma nota de 0 a 10
e a classifique em letras, usando switch/case.
A classificação deve ser:

a.	A: 9-10
b.	B: 7-8
c.	C: 5-6
d.	D: 3-4	
e.	F: 0-2
Se a nota estiver fora do intervalo de 0 a 10, imprima "Nota inválida". */

let nota = 10;
switch (nota) {
    case 9:
    case 10:
        console.log("A")
        break;
    case 7:
    case 8:
        console.log("B")
        break;
    case 5:
    case 6:
        console.log("C")
        break;
    case 3:
    case 4:
        console.log("D")
        break;
    case 0:
    case 2:
        console.log("F")
        break;
    default:
        console.log("Nota Inválida.")
}