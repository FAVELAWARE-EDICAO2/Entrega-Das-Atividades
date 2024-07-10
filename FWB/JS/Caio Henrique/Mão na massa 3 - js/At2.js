function avaliarPessoa(altura, beleza, carisma) {
   if (altura > 7 && beleza > 7 && carisma > 7) {
      return "Booooraa";
   } else if (
      (altura > 7 && beleza > 7) ||
      (altura > 7 && carisma > 7) ||
      (beleza > 7 && carisma > 7)
   ) {
      return "Só vai...";
   } else if (altura > 7 || beleza > 7 || carisma > 7) {
      return "Fé em Deus...";
   } else {
      return "Misericórdia";
   }
}
console.log(avaliarPessoa(4, 4, 4));
