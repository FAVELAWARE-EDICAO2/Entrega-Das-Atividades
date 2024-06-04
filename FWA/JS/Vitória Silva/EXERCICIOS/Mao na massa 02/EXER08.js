let num1 = parseInt(prompt("Insira sua nota:"));
switch (num1) {
  case 9:
  case 10:
    console.log("A");
    break;
  case 7:
  case 8:
    console.log("B");
    break;
  case 5:
  case 6:
    console.log("C");
    break;
  case 3:
  case 4:
    console.log("D");
    break;
  case 0:
  case 2:
    console.log("F");
    break;
  default:
    resultado = "Sua nota não é valida, por favor insira uma nota valida.";
}
