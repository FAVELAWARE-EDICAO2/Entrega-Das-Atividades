function classificarfaixaetaria(idade)
{ if(idade >=0 && Number.isInteger(idade))
if (idade<=12){
console.log("Criança");

} else if (idade <=17){
    console.log("adolecente");
}else if(idade <=64){
    console.log("aldulto");
}else{
    console.log("idoso");
} else {
    console.log("indade inválida");

}

}
//testa função
classificarfaixaetaria(10); //Deve inprimmir "Criança"
classificarfaixaetaria(17); //Deve inprimmir "Adolescente"
classificarfaixaetaria(30); //Deve inprimmir "Adulto"
classificarfaixaetaria(66); //Deve inprimmir "Idoso"
