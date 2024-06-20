/*Escreva um programa que receba uma nota de 0 a 10 e a classifique em letras, usando switch/case. A classificação deve ser:

A: 9-10
B: 7-8
C: 5-6
D: 3-4	
F: 0-2
Se a nota estiver fora do intervalo de 0 a 10, imprima "Nota inválida".
*/
let nOta = 6


switch (nOta){
    case 1:
    console.log("F")
    break
    case 2:
    console.log("F")
    case 3:
    console.log("D")
    break
    case 4:
    console.log("D")
    break
    case 5:
    console.log("C")
    case 6:
    console.log("C")
    break
    case 7:
    console.log("B")
    break
    case 8:
    console.log("B")
    break
    case 9:
    console.log("A")
    break
    case 10:
    console.log("A")
    break
}