let estudantes = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mariana", nota: 6 }
];

let aprovados = estudantes.filter(estudante => estudante.nota >= 7);

let nomesAprovados = aprovados.map(estudante => estudante.nome);

nomesAprovados.sort();

console.log(nomesAprovados);
