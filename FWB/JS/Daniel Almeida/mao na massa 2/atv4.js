function verificarCaractere(caractere) {
    if((caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z')){
        if( caractere =='a' || caractere =='e' || caractere == 'i' || caractere ==  'o' || caractere == 'u' ||
        caractere =='A' || caractere =='E' || caractere == 'I' || caractere ==  'O' || caractere == 'U' ) {
            console.log(caractere + " é uma vogal");
        } else{
            console.log(caractere + " é uma consoante");
        }
    }else{
                console.log(caractere + " nao é uma letra valida");
                 
     }
    
   }

verificarCaractere('Â')
verificarCaractere('P')
verificarCaractere('@')