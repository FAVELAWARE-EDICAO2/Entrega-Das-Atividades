/*Crie um programa que dado um único caractere determina se ele é uma vogal ou uma consoante.
Se o caractere não for uma letra (um número), 
deve imprimir "Y não é uma letra válida", onde Y é o caractere fornecido. */

var caractere = 1;

if(typeof caractere !== "string"){
    console.log("O valor não é uma letra :" + caractere);
}else{
    if(caractere == "a" || caractere == "e" || caractere == "i" ||  caractere == "o" || caractere == "u"){
        console.log("O valor é uma vogal :" + caractere); 
    }else{
        console.log("O valor é uma consoante :" + caractere); 
    }
}

