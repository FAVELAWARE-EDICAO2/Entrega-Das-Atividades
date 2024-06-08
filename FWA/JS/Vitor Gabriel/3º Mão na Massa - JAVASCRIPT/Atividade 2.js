/* 2. “Você está programando um novo Tinder… E você tem
   três quesitos que você pode dar notas de 0 a 10:
   Altura, Beleza e Carisma. Daí você, por estar um
   tempinho sem… “amor”, colocou sua lógica da seguinte 
   forma:
   
• Se a pessoa tiver mais de 7 em todos os quesitos, imprima: “Booooraa”;
 
• Se a pessoa tiver mais de 7 em pelo menos 2 quesitos, imprima: “só vai…”; 

• Se a pessoa tiver mais de 7 em só 1 quesito, imprima: “Fé em Deus…”; 

• Se não atender a nenhum…, imprima: “Misericórdia”.”
*/

let altura = 7;
let beleza = 6;
let carisma = 7;

switch (true) {
    case altura > 7 || beleza > 7 || carisma > 7:
        console.log("Booooraa")
        break;
    case altura > 7 || beleza > 7 || carisma > 7:
        console.log("Só vai…")
        break;
    case  altura > 7 || beleza > 7 || carisma > 7:
        console.log("Fé em Deus…")
        break
    default:
        console.log("Misericórdia.")
}

