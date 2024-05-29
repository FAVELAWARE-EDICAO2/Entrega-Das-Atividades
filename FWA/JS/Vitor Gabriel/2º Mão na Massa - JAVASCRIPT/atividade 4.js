/* 4.	Crie um programa que dado um único caractere
determina se ele é uma vogal ou uma consoante.Se
o caractere não for uma letra (por exemplo, um
símbolo ou número), deve imprimir "Y não é uma
letra válida", onde Y é o caractere fornecido.  */

let caractere = "y";
switch (caractere) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vogal");
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
  case "j":
  case "k":
  case "l":
  case "m":
  case "n":
  case "p":
  case "q":
  case "r":
  case "s":
  case "t":
  case "v":
  case "w":
  case "x":
  case "z":
    console.log("Consoante");
    break;
  case "h":
    console.log(
      "A letra H não tem som, então não é considerada formalmente nem consoante nem vogal"
    );
    break;
  case "y":
    console.log(
      "Letra estrangeira, mas incorporada à língua portuguesa, \nLetra Y: tem valor de vogal, produzindo o mesmo som da vogal I (como no nome Yasmin ou na palavra “yakisoba”)."
    );
    /* fonte https://mundoeducacao.uol.com.br/gramatica/consoantes.htm */
    break;
  default:
    console.log(caractere, "Letra inválida");
}
