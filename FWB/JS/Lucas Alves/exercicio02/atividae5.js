function verficarsenha(senha){
    if (senha.length >= 8){
        console.log("senha válida");
    } else{
        console.log(" a senha deve ter pelo menos 8 caracteres");
    }

} 
verficarsenha
verficarsenha
function verificarSenha(senha) {
    if (senha.length >= 8) {
        console.log("Senha válida");
    } else {
        console.log("A senha deve ter pelo menos 8 caracteres");
    }
}

// função com  exemplos
verificarSenha("minhaSenha");   // Deve imprimir "Senha válida"
verificarSenha("1234567");      // Deve imprimir "A senha deve ter pelo menos 8 caracteres"
verificarSenha("senha!@#$");    // Deve imprimir "Senha válida"

