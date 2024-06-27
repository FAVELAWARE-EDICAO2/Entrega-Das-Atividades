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

function avaliarPessoa(altura, beleza, carisma) {
    if (altura > 7 && beleza > 7 && carisma > 7) {
        console.log("Booooraa");
    } else if ((altura > 7 && beleza > 7) || (altura > 7 && carisma > 7) || (beleza > 7 && carisma > 7)) {
        console.log("só vai...");
    }

    else if (altura > 7 || beleza > 7 || carisma > 7) {
        console.log("Fe em Deus...");
    }

    else {
        console.log("Misericórdia");
    }
}
avaliarPessoa(8, 9, 8); // Saida: Booooraa
avaliarPessoa(8, 6, 9); // Saida: só...
avaliarPessoa(8, 5, 5); // Saida: Fé em Deus...
avaliarPessoa(6, 4, 3); // Saida: Misericódia






/* testes
 let altura = 9;
let beleza = 6;
let carisma = 9;

switch (true) {
    case altura > 7 && beleza > 7 && carisma > 7:
        console.log("Booooraa")
        break;
    case ((altura > 7 && beleza > 7) || (altura > 7 && carisma > 7) || (beleza > 7 && carisma > 7)):
        console.log("só vai...");
        break;
    case  altura > 7 || beleza > 7 || carisma > 7:
        console.log("Fé em Deus…")
        break
    default:
        console.log("Misericórdia.")
}

*/

/* testes
let altura = 8;
let beleza = 9;
let carisma = 7;

let notas = [altura, beleza, carisma];
let maisDe7 = notas.filter(n => n > 7).length;

if (maisDe7 === 3) {
    console.log("Booooraa");
} else if (maisDe7 === 2) {
    console.log("só vai...");
} else if (maisDe7 === 1) {
    console.log("Fé em Deus...");
} else {
    console.log("Misericórdia");
}
    */

