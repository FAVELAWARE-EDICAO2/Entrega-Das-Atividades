let estudantes = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mariana", nota: 6 }
];

let mais1=estudantes.push( {nome: "Pedro", nota: 10} ); // adiciona o elemento
console.log(mais1);

let menos1 =  estudantes.splice (2,1);
console.log(menos1);