
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mariana", nota: 6 }
];

alunos.push({ nome: "Pedro", nota: 10 });

const menorNota = Math.min(...alunos.map(aluno => aluno.nota));
const alunoMenorNota = alunos.find(aluno => aluno.nota === menorNota);
alunos.splice(alunos.indexOf(alunoMenorNota), 1);

const índiceDoCarlos = alunos.findIndex(aluno => aluno.nome === "Carlos");

alunos.sort((a, b) => a.nota - b.nota);

const nomesDosAlunos = alunos.map(aluno => aluno.nome);

const somaDasNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
const médiaDasNotas = somaDasNotas / alunos.length;


console.log("Alunos:", alunos);
console.log("Média das notas:", médiaDasNotas);
