// Função para remover números pares de um array
function removerPares(numeros) {
    // Criando um novo array vazio para armazenar os números ímpares
    const impares = [];
  
    // Percorrendo cada número do array original
    for (let numero of numeros) {
      // Verificando se o número é ímpar
      if (numero % 2 !== 0) {
        // Se for ímpar, adicione-o ao novo array
        impares.push(numero);
      }
    }
  
    // Retornando o novo array com apenas números ímpares
    return impares;
  }
  
  // Exemplo de uso
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosImpares = removerPares(numeros);
  console.log(numerosImpares); // Resultado: [1, 3, 5, 7, 9]





// Função para remover números pares e multiplicar ímpares por 2
function processarNumeros(numeros) {
    // Criando um novo array vazio para armazenar os resultados
    const processados = [];
  
    // Percorrendo cada número do array original
    for (let numero of numeros) {
      // Verificando se o número é ímpar
      if (numero % 2 !== 0) {
        // Se for ímpar, multiplique por 2 e adicione ao novo array
        processados.push(numero * 2);
      } else {
        // Se for par, mantenha o número e adicione ao novo array
        processados.push(numero);
      }
    }
  
    // Retornando o novo array com os números processados
    return processados;
  }
  
  // Exemplo de uso
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosProcessados = processarNumeros(numeros);
  console.log(numerosProcessados); // Resultado: [2, 3, 10, 7, 18]







// Função para remover pares, multiplicar ímpares por 2 e ordenar em decrescente
function processarOrdenarNumeros(numeros) {
    // Criando um novo array vazio para armazenar os resultados
    const processados = [];
  
    // Percorrendo cada número do array original
    for (let numero of numeros) {
      if (numero % 2 !== 0) {
        processados.push(numero * 2);
      } else {
        processados.push(numero);
      }
    }
  
    // Ordenando o array "processados" em ordem decrescente
    processados.sort((a, b) => b - a);
  
    // Retornando o novo array ordenado
    return processados;
  }
  
  // Exemplo de uso
  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosOrdenados = processarOrdenarNumeros(numeros);
  console.log(numerosOrdenados); // Resultado: [18, 10, 7, 5, 3, 2, 1]


// Função para remover pares, multiplicar ímpares por 2 e ordenar em decrescente
function processarOrdenarNumeros(numeros) {
    const processados = [];
  
    for (let numero of numeros) {
      if (numero % 2 !== 0) {
        processados.push(numero * 2);
      } else {
        processados.push(numero);
      }
    }
  
    processados.sort((a, b) => b - a);
  
    return processados;
  }
  
  // Exemplo de uso
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosOrdenado = processarOrdenarNumeros(numeros);
  console.log(numerosOrdenados); // Resultado: [18, 10, 7, 5, 3, 2, 1]