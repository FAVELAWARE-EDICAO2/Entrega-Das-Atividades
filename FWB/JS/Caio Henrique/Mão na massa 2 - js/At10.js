function obterEstacaoDoAno(numeroMes) {
   switch (numeroMes) {
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
console.log(obterEstacaoDoAno(12));
