/* Crie um programa que apresente um menu com três opções:
   (1) Dizer olá, (2) Exibir data atual, (3) Sair. O
   programa deve continuar exibindo o menu até que o usuário
   escolha a opção "Sair". Use um loop do...while para
   implementar este comportamento.
 */
let menu
do 
{
  menu = prompt("Digite 1 2 ou 3");
  switch (menu) {
   case 1:
     console.log ("Olá")
     break;
  case 2:
   console.log ("Exibir data atual")
   break
   case 3:
     console.log ("Sair")
   default:
  } 
} while (menu !==3);
