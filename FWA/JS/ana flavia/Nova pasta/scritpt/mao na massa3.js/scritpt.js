// Função para verificar se um número é primo
function ehPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1 && numero !== 0;
}

// Vetor para armazenar os números
let vetor = [];

// Preencher o vetor com 9 números inteiros (você pode modificar os valores conforme necessário)
vetor.push(2);
vetor.push(3);
vetor.push(5);
vetor.push(6);
vetor.push(7);
vetor.push(11);
vetor.push(13);
vetor.push(15);
vetor.push(17);

// Verificar e mostrar os números primos e suas posições
console.log("Números primos e suas posições:");
for (let i = 0; i < vetor.length; i++) {
    if (ehPrimo(vetor[i])) {
        console.log("Número primo:", vetor[i], "Posição:", i);
    }
}
///------------------------------------------------------------------------------------------------------------
// Função para verificar a situação com base nas notas
function verificarSituacaoAlturaBelezaCarisma(altura, beleza, carisma) {
    const notas = [altura, beleza, carisma];
    const countAcimaSete = notas.filter(nota => nota > 7).length;

    if (countAcimaSete === 3) {
        return "Booooraa";
    } else if (countAcimaSete >= 2) {
        return "só vai...";
    } else if (countAcimaSete === 1) {
        return "Fé em Deus...";
    } else {
        return "Misericórdia";
    }
}

// Exemplo de notas para altura, beleza e carisma
const altura = 8;
const beleza = 6;
const carisma = 9;

// Verificar a situação com base nas notas fornecidas
const situacao = verificarSituacaoAlturaBelezaCarisma(altura, beleza, carisma);

// Exibir resultado
console.log("Notas - Altura:", altura, "Beleza:", beleza, "Carisma:", carisma);
console.log("Situação:", situacao);
///-----------------------------------------------------------------------------------------------------------
// Função para calcular a soma dos elementos de uma lista
function calcularSoma(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

// Função para ler uma lista de números inteiros fornecidos pelo usuário
function lerListaNumeros() {
    let lista = [];
    let entrada = prompt("Digite os números inteiros separados por vírgula:");
    let numeros = entrada.split(",");
    for (let i = 0; i < numeros.length; i++) {
        lista.push(parseInt(numeros[i]));
    }
    return lista;
}

// Ler a lista de números fornecida pelo usuário
let lista = lerListaNumeros();

// Calcular a soma dos elementos da lista
let soma = calcularSoma(lista);

// Exibir o resultado
console.log("Lista de números:", lista);
console.log("Soma dos elementos:", soma);
//---------------------------------------------------------------------------
// Crie um array chamado números que contenha os números: 3, 5, 7, 9, 11.
let numeros1 = [3, 5, 7, 9, 11];

// Adicione o número 13 ao final do array.
numeros.push(13);

// Remova o primeiro elemento do array.
numeros.shift();

// Encontre o índice do número 9 no array.
let indiceNumero9 = numeros.indexOf(9);

// Ordene o array em ordem decrescente.
numeros.sort((a, b) => b - a);

// Inverta a ordem dos elementos no array.
numeros.reverse();

// Filtre os números do array para obter apenas aqueles maiores que 7.
let numerosMaioresQue7 = numeros.filter(numero => numero > 7);

// Some todos os elementos do array.
let soma1 = numeros.reduce((total, numero) => total + numero, 0);

// Imprima o array final.
console.log("Array final:", numeros);
console.log("Soma dos elementos:", soma);
//-------------------------------------------------------------------------
// Crie um array chamado alunos que contenha objetos representando alunos, cada um com propriedades nome e nota.
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mariana", nota: 6 }
];

// Adicione um novo aluno com nome "Pedro" e nota 10 ao final do array.
alunos.push({ nome: "Pedro", nota: 10 });

// Remova o aluno com a menor nota do array.
let menorNota = Math.min(...alunos.map(aluno => aluno.nota));
alunos = alunos.filter(aluno => aluno.nota !== menorNota);

// Encontre o índice do aluno com nome "Carlos".
let indiceCarlos = alunos.findIndex(aluno => aluno.nome === "Carlos");

// Ordene os alunos por nota em ordem crescente.
alunos.sort((a, b) => a.nota - b.nota);

// Crie um novo array contendo apenas os nomes dos alunos.
let nomesAlunos = alunos.map(aluno => aluno.nome);

// Encontre a média das notas dos alunos.
let somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
let mediaNotas = somaNotas / alunos.length;

// Imprima o array final de alunos e a média das notas.
console.log("Array final de alunos:", alunos);
console.log("Média das notas dos alunos:", mediaNotas);
//-----------------------------------------------------------------
// Função para remover números pares do array e multiplicar números ímpares por 2
function processarArray(array) {
    let resultado = [];

    // Itera sobre o array fornecido
    for (let i = 0; i < array.length; i++) {
        // Verifica se o número é ímpar
        if (array[i] % 2 !== 0) {
            // Multiplica números ímpares por 2
            resultado.push(array[i] * 2);
        }
    }

    // Ordena os números resultantes em ordem decrescente
    resultado.sort((a, b) => b - a);

    return resultado;
}

// Array de números inteiros
let numeros = [3, 8, 5, 12, 7, 10, 11, 6];

// Remove todos os números pares do array, multiplica números ímpares por 2 e ordena em ordem decrescente
let resultadoFinal = processarArray(numeros);

// Mostra o array resultante após as operações
console.log("Array resultante:", resultadoFinal);
//------------------------------------------------------------------------------------------
// Função para processar o array de strings
function processarArray(strings) {
    // Filtra as strings que têm menos de 5 caracteres
    let filtradas = strings.filter(string => string.length >= 5);
    
    // Converte as strings restantes para letras maiúsculas
    let maiusculas = filtradas.map(string => string.toUpperCase());
    
    // Ordena as strings em ordem alfabética
    let ordenadas = maiusculas.sort();

    return ordenadas;
}

// Array de strings
let strings = ["banana", "abacaxi", "laranja", "uva", "melão", "pera", "manga"];

// Processa o array de strings
let resultadoFinal1 = processarArray(strings);

// Mostra o array resultante após as operações
console.log("Array resultante:", resultadoFinal);
//---------------------------------------------------
// Array de objetos representando estudantes e suas notas
let estudantes = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mariana", nota: 6 }
];

// Filtra os estudantes que têm nota maior ou igual a 7
let aprovados = estudantes.filter(estudante => estudante.nota >= 7);

// Cria um novo array contendo apenas os nomes dos estudantes aprovados
let nomesAprovados = aprovados.map(estudante => estudante.nome);

// Ordena os nomes dos estudantes aprovados em ordem alfabética
nomesAprovados.sort();

// Mostra o array resultante após as operações
console.log("Estudantes aprovados:", nomesAprovados);
//-----------------------------------------------------------------------------------------------
// Crie um array chamado tasks e adicione algumas tarefas inicialmente
let tasks = ["Estudar JavaScript", "Fazer compras", "Lavar o carro"];

// Adicione uma nova tarefa ao final do array
tasks.push("Passear com o cachorro");

// Remova uma tarefa específica do array usando seu índice
let indiceTarefaRemover = 1; // Por exemplo, vamos remover a tarefa "Fazer compras"
tasks.splice(indiceTarefaRemover, 1);

// Liste todas as tarefas no console, precedidas pelo seu índice no array
console.log("Lista de Tarefas:");
tasks.forEach((tarefa, indice) => {
    console.log(`${indice + 1}. ${tarefa}`);
});
//------------------------------------------------------------------------------------------------------