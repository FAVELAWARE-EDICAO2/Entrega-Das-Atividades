function somarElementos(lista) {
    return lista.reduce((acc, curr) => acc + curr, 0);
}

let lista = prompt("Digite uma lista de números inteiros separados por espaço:").split(" ").map(Number);
let soma = somarElementos(lista);
console.log(`A soma dos elementos é: ${soma}`);

