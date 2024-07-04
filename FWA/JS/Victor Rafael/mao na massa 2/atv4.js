let caractere = 'a';

if (!/^[a-zA-Z]$/.test(caractere)) {
    console.log(caractere + " não é uma letra válida");
} else if ('aeiouAEIOU'.includes(caractere)) {
    console.log(caractere + " é uma vogal");
} else {
    console.log(caractere + " é uma consoante");
}
