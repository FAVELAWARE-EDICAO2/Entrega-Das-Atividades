function verificarcaractere(caractere) {
    if ((caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z' )){
        if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere =='o' || caractere =='u' || 
             caractere == 'A'|| caractere == 'E' || caractere == 'I' || caractere == 'O' || caractere == 'U' ){
                console.log(caractere + "é uma vogal.");
             }else{
                console.log(caractere + "não é uma consoante");
             }
        
    } else{
        console.log(caractere + "não é uma valida.");
    }
}
verificarcaractere('B'); // saída: a é uma vogal.
verificarcaractere('a'); // saída: B é uma consoante.
verificarcaractere('Z'); // saída: 5 não é  uma letra valida.