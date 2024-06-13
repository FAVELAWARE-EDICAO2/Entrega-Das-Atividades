let senha = "1234567895";

if (senha.length >= 8 && senha.length <= 9) {
    console.log("Senha válida");
} else if (senha.length <= 7){
    console.log("Senha inválida");
}
else if (senha.length > 9){
    console.log("Senha inválida");
}
else {
    console.log("A senha deve ter pelo menos 8 caracteres");
    
}
