/*2-Crie um programa que verifica se o número é positivo, negativo ou zero. 
Se for positivo, deve imprimir "X é positivo", onde X é o número fornecido. 
Se for negativo, deve imprimir "X é negativo". Se for zero, imprima "X é zero".*/

var num = -25;

if(num > 0){
    console.log("Seu numero : "+ num +" é positivo");
}else if(num == 0){
    console.log("Seu numero : "+ num +" é zero( 0 )");
}else{
    console.log("Seu numero : "+ num +" é negativo");
}