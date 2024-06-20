/*3-Crie um programa que dada uma idade classifica a faixa etária como "Criança" (0 a 12 anos), 
"Adolescente" (13 a 17 anos), "Adulto" (18 a 64 anos) ou "Idoso" (65 anos ou mais). 
Se a idade for inválida (números negativos, não inteiros ou fora do escopo), deve imprimir "Idade inválida".*/

var idadeCrianca = 5;
var idadeAdolescente = 13;
var idadeAdulta =18;
var idadeIdosa = 65;


//Condição Se para idadeCrianca
if(idadeCrianca <=12 && idadeCrianca > 0){
    console.log("Esta pessoa é uma criança,ela tem :" + idadeCrianca);
}else if(idadeCrianca < 0){
    console.log("Idade Inválida : " + idadeCrianca);
}else if(idadeCrianca == 0){
    console.log("Idade Inválida ou Não completou seu primeiro ano : " + idadeCrianca);
}

//Condicao Se para idadeAdolescente
if(idadeAdolescente <=17 &&idadeAdolescente  >= 13){
    console.log("Esta pessoa é Adolescente ,ela tem :" + idadeAdolescente);
}else if(idadeAdolescente <=12){
    console.log("Idade Inválida para um Adolescente: " + idadeAdolescente);
}

//Condicao Se para idadeAdulta
if(idadeAdulta <=64 && idadeAdulta >= 18){
    console.log("Esta pessoa é Adulta ,ela tem :" + idadeAdulta);
}else if(idadeAdulta <=17){
    console.log("Idade Inválida para um Adulto: " + idadeAdulta);
}

//Condicao Se para idadeIdosa
if(idadeIdosa >= 65){
    console.log("Esta pessoa é Idosa,ela tem :" + idadeIdosa);
}else if(idadeIdosa <= 64){
    console.log("Idade Inválida para um Idoso: " + idadeIdosa);
}