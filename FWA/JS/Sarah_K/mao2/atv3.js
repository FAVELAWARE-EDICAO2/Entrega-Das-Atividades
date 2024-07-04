let idade = 15;

if (idade >= 0 && idade <= 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Jovem");
} else if (idade >= 18 && idade <= 64) {
    console.log("Adulto");
} else if (idade >= 65) {
    console.log("Velho");
} else {
    console.log("Idade inválida");
}
