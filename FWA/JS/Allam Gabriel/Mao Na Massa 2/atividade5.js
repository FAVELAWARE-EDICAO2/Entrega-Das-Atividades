/*Escreva um programa que dada uma string verifica se ela tem pelo menos 8 caracteres. 
Imprima "Senha válida" se a senha cumprir esse requisito. Caso contrário, 
imprima "A senha deve ter pelo menos 8 caracteres".*/ 

teste1 = "Testandolength";

if(teste1.length >= 8){
    console.log("Senha possui quantidade de caracteres válidas");
}else{
    console.log("Senha inválida")
}

//Observação aprendida,length é uma propriedade da String que conta em numeros a quantidades de caracteres na variável;