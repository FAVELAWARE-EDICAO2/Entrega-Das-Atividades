let sinal = prompt("escolha uma cor do semáforo");
switch (sinal) {
  case "vermelho":
    console.log("Pare");
    break;
  case "verde":
    console.log("Siga");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
    default:
        console.log("O que você digitou não é a cor de um semáforo")
}
