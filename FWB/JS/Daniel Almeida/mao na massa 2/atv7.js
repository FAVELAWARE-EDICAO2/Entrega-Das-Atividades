const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite o operador (+, -, *, /): ', (operator) => {
      let resultado;
      
      switch (operator) {
        case '+':
          resultado = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          resultado = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          resultado = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          if (parseFloat(num2) !== 0) {
            resultado = parseFloat(num1) / parseFloat(num2);
          } else {
            console.log('Não é possível dividir por zero.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Operador inválido');
          rl.close();
          return;
      }
      
      console.log(`O resultado da operação ${num1} ${operator} ${num2} é: ${resultado}`);
      rl.close();
    });
  });
});
