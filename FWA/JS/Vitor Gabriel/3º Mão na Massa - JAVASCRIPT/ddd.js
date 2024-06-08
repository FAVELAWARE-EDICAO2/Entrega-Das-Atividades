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