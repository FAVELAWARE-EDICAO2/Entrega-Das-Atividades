let caractere = "b";

// Convertendo o caractere para minúsculo para facilitar a comparação
caractere = caractere.toLowerCase();

// Verifica se o caractere é uma letra
if (/^[a-z]$/.test(caractere)) {
    // Verifica se o caractere é uma vogal
    if ("aeiou".includes(caractere)) {
        console.log("Vogal");
    } else {
        console.log("Consoante");
    }
} else {
    console.log(caractere + " não é uma letra válida");
}
