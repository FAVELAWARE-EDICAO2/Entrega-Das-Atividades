var idade = 20

if (idade >= 0 && idade <= 12) {
    console.log(idade + " é criança");

} 

else if(idade >= 13 && idade <= 17) {
   console.log(idade + " é adolescente");
}

else if (idade >= 18 && idade <= 64) {
    console.log(idade + " é adulto");
} 

else if (idade >= 65) {
    console.log(idade + " é idoso");
}

 else  {
    console.log(idade + " é invalida");
}
