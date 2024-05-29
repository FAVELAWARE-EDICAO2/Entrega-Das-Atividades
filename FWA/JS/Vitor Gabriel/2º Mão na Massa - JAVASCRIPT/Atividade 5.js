/* 5.	Escreva um programa que dada uma string verifica
se ela tem pelo menos 8 caracteres. Imprima
"Senha válida" se a senha cumprir esse requisito.
Caso contrário, imprima "A senha deve ter pelo
menos 8 caracteres". */

let letra = "abcdefgh"

if (letra.length < 8) {
    console.log("Senha invalida")
}
if (letra.length > 7) {
    console.log("Senha valida")
}