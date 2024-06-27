let idade = 20;

if (idade >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

let numero = 20;
if (numero < 0) {
  console.log("o numero" + numero + " é negativo");
} else if (numero == 0) {
  console.log("numero " + numero + "e 0");
} else {
  console.log("numero maior que 0");
}


//------------------------------------------------

let idade2 = 15;
if ((idade2 >= 0) & (idade2 <= 12)) {
  console.log("crianca");
} else if ((idade2) => 13 & (idade2 <= 17)) {
  console.log("adolecente");
} else if ((adulto) => 18 & (idade2 >= 64)) {
  console.log("adulto");
} else {
  console.log("idoso");
}

let texto = "letra";
console.log(texto.length);
if (texto.length >= 8) {
  console.log("senha valida");
} else {
  console.log("senha invalida");
}
//----------------------------------------------------------
let semana=7

switch (semana) {
  case 1:
    console.log("domingo");
    break;
  case 2:
    console.log("segunda");
    break;
  case 3:
    console.log("terca");
    break;
  case 4:
    console.log("quarta");
    break;
  case 5:
    console.log("quinta");
    break;
  case 6:
    console.log("sexta");
    break;
  case 7:
    console.log("sabado");
    break;
}
//------------------------------------------------------------------
function calcularOperacao(numero1, numero2, operador) {
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Divisão por zero não é permitida.";
            }
        default:
            return "Operador inválido.";
    }
}

// Solicita ao usuário dois números e um operador
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operador = prompt("Digite o operador (+, -, *, /):");

// Calcula o resultado da operação
let resultado = calcularOperacao(num1, num2, operador);

// Exibe o resultado
console.log("Resultado:", resultado);
//---------------------------------------------------------------------------------

function classificarNota(nota) {
    switch (true) {
        case (nota >= 9 && nota <= 10):
            return "A";
        case (nota >= 7 && nota <= 8):
            return "B";
        case (nota >= 5 && nota <= 6):
            return "C";
        case (nota >= 3 && nota <= 4):
            return "D";
        case (nota >= 0 && nota <= 2):
            return "F";
        default:
            return "Nota inválida";
    }
}

// Solicita ao usuário uma nota
let nota = parseFloat(prompt("Digite a nota:"));

// Classifica a nota
let classificacao = classificarNota(nota);

// Exibe a classificação
console.log("Classificação:", classificacao);
//--------------------------------------------------------------------------------------------------
function acaoSemafaro(cor) {
    switch (cor) {
        case "vermelho":
            return "Pare";
        case "amarelo":
            return "Atenção";
        case "verde":
            return "Siga";
        default:
            return "Cor inválida";
    }
}

// Solicita ao usuário a cor do semáforo
let cor = prompt("Digite a cor do semáforo (vermelho, amarelo ou verde):");

// Obtém a ação correspondente à cor do semáforo
let acao = acaoSemafaro(cor.toLowerCase()); // Converte a entrada para minúsculas para ser case-insensitive

// Exibe a ação correspondente
console.log(acao);
//------------------------------------------------------------------------------
function estacaoDoAno(mes) {
    switch (mes) {
        case 1:
        case 2:
        case 12:
            return "Verão";
        case 3:
        case 4:
        case 5:
            return "Outono";
        case 6:
        case 7:
        case 8:
            return "Inverno";
        case 9:
        case 10:
        case 11:
            return "Primavera";
        default:
            return "Mês inválido";
    }
}

// Solicita ao usuário o número do mês
let mes = parseInt(prompt("Digite o número do mês (1 a 12):"));

// Obtém a estação do ano correspondente ao mês fornecido
let estacao = estacaoDoAno(mes);

// Exibe a estação do ano
console.log(estacao);



  