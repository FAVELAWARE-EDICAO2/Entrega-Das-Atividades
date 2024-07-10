 //2
function avaliarPessoa (altura,beleza,carisma){
    if(altura >7 && beleza >7 && carisma >7){
        console.log("booooooraa...")
    }
    else if((altura >7 && beleza >7)||(altura >7 && carisma >7)||(carisma >7 && beleza >7)){
       console.log("só vaaai ...");
    }

    else if((carisma>7)||(beleza>7)||(altura>7)){
        console.log("fé em Deus...");}

        else  {
    console.log("Misericordia...");}
        }
//-----------------------------------------------------------------------------,

  //1
   function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false
    return num > 1;
}

const a = [1, 2, 3, 4, 5,6,7,8,9];

for (const numero of a) {
    console.log(`${numero} é primo? ${isPrime(numero)}`);
}
//------------------------------------------------------------------------------
//3
function somarElementos(lista) {
    return lista.reduce((acc, curr) => acc + curr, 0);
}

let lista = prompt("Digite uma lista de números inteiros separados por espaço:").split(" ").map(Number);
let soma = somarElementos(lista);
console.log(`A soma dos elementos é: ${soma}`);

//-------------------------------------------------------------------------------
//4
let numeros = [3, 5, 7, 9, 11];

numeros.push(13);

numeros.shift();

let indice9 = numeros.indexOf(9);

numeros.sort((a, b) => b - a);

numeros.reverse();

let filtrados = numeros.filter(num => num > 7);

let somaa= numeros.reduce((acc, num) => acc + num, 0);

console.log("Array final:", numeros);
console.log("Soma dos elementos:", somaa);
//--------------------------------------------------------
//5
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
//-----------------------------------------------------------------------------------------
//6
let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

números = números.filter(num => num % 2 !== 0);

números = números.map(num => num * 2);

números.sort((a, b) => b - a);

console.log("Array resultante:", números);
//---------------------------------------------------------------------------------
//7
let strings = ["casa", "carro", "árvore", "banana", "lua", "sol"];


strings = strings.filter(str => str.length >= 5);


strings = strings.map(str => str.toUpperCase());


strings.sort();


console.log("Array resultante:", strings);
//------------------------------------------------------------------------------------
//8
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

console.log("Array de aprovados:", aprovados);
console.log("Nomes dos aprovados em ordem alfabética:", nomesAprovados);
//----------------------------------------------------------------------------------------------
//9
let tasks = ["Comprar leite", "Estudar JavaScript", "Fazer exercícios"];


tasks.push("Ler um livro");


let indiceRemover = 1; 
tasks.splice(indiceRemover, 1);


tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
});
