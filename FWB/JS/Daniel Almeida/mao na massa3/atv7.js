let array = ["pao","bergamota","dndz","zezinpançudo","pindamonhangaba","luladrao","bolsonabo"]
let arrayFiltrada = array.filter(palavra => palavra.length >= 5);

console.log(arrayFiltrada);

let palavrasMaiusculas = arrayFiltrada.map(palavra => palavra.toUpperCase());

console.log(palavrasMaiusculas);

palavrasMaiusculas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(palavrasMaiusculas);