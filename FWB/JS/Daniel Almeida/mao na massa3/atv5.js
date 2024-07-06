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
  console.log("Índice do aluno Carlos:", indiceCarlos);
  
  alunos.sort((a, b) => a.nota - b.nota);
  
  let nomesAlunos = alunos.map(aluno => aluno.nome);
  console.log("Nomes dos alunos:", nomesAlunos);
  
  let somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
  let mediaNotas = somaNotas / alunos.length;
  console.log("Média das notas:", mediaNotas.toFixed(2));
  
  console.log("Array final de alunos:", alunos);
  console.log("Média das notas:", mediaNotas.toFixed(2));
  