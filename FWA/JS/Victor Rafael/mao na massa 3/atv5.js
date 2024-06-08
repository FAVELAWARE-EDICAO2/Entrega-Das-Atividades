
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mariana", nota: 6 }
];

alunos.push({ nome: "Pedro", nota: 10 });

let menorNota = Math.min(...alunos.map(aluno => aluno.nota));

alunos = alunos.filter(aluno => aluno.nota !== menorNota);

let indiceCarlos = alunos.findIndex(aluno => aluno.nome === "Carlos");

alunos.sort((a, b) => a.nota - b.nota);

let nomes = alunos.map(aluno => aluno.nome);

let mediaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;

console.log("Array final de alunos:", alunos);
console.log("Média das notas:", mediaNotas);
