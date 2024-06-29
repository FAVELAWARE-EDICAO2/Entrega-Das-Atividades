// Função para calcular a soma de uma lista de números
function calcularSoma(listaNumeros) {
    let soma = 0;
    for (let numero of listaNumeros) {
      soma += numero;
    }
    return soma;
  }
  
  // Solicita ao usuário a entrada de números
  const listaNumeros = [];
  let numero = 0;
  while (numero !== null) {
    numero = parseInt(prompt("Digite um número (ou pressione Enter para finalizar):"));
    if (numero !== null) {
      listaNumeros.push(numero);
    }
  }
  
  // Calcula e imprime a soma dos números
  const soma = calcularSoma(listaNumeros);
  console.log(`A soma dos números da lista é: ${soma}`);