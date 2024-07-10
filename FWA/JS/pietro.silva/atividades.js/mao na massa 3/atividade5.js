let alunos = [{nome: "ana", nota: 8},
    {nome: "João", nota: 5},
    {nome: "Carlos", nota: 7},
    {nome: "Beatriz", nota: 9},
    {nome: "Mariana", nota: 6}]
    console.log(alunos)
    alunos.push({nome: "Pedro", nota: 10})
    console.log(alunos)
 alunos.splice(1,1)
 console.log(alunos)
console.log(alunos[1])
alunos.sort(function(a, b) {
 return a.nota - b.nota; // Ordena pelo valor da nota
});
console.log(alunos);
let notas = alunos.reduce((reg1,alunos) => reg1 + alunos.nota, 0)
console.log(notas)

let media = notas / alunos.length
console.log(media)