/**
 Crie um programa que dada uma idade classifica a faixa etária como "Criança" (0 a 12 anos), "Adolescente" (13 a 17 anos), "Adulto" (18 a 64 anos) ou "Idoso" (65 anos ou mais).
 Se a idade for inválida (números negativos, não inteiros ou fora do escopo), deve imprimir "Idade inválida".
 */

 var IdadeCrianca = 5
 var IdadeAdolescente = 15
 var IdadeAdulto = 38
 var Idadeidoso = 66
//-------------------CRIANÇA--------------------------------
 if (IdadeCrianca >0 && IdadeCrianca <=12){
    console.log("criança")
 }
 else {
    console.log ("idade invalida")
}
//-----------------ADOLECENTE------------------------------
if (  IdadeAdolescente >12 && IdadeAdolescente <=17){
    console.log("Adolescente")
 }
 else {
    console.log ("idade invalida")
}
//-------------------ADULTO--------------------------------
if (  IdadeAdulto >= 18 && IdadeAdulto <= 64){
    console.log("Adulto")
 }
 else {
    console.log ("idade invalida")

//--------------------IDOSO-------------------------------

}if (  Idadeidoso >64 ){
    console.log("idoso")
 }
 else {
    console.log ("idade invalida")
}