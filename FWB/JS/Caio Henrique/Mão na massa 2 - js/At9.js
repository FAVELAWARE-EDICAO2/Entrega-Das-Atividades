function verificarSemafaro(cor) {
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

console.log(verificarSemafaro("amarelo"));
