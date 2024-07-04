var caractere = "o";

if (
   caractere === "a" ||
   caractere === "e" ||
   caractere === "i" ||
   caractere === "o" ||
   caractere === "u" ||
   caractere === "A" ||
   caractere === "E" ||
   caractere === "I" ||
   caractere === "O" ||
   caractere === "U"
) {
   return "Vogal";
} else if (
   (caractere >= "a" &&
      caractere <= "z" &&
      !(
         caractere === "a" ||
         caractere === "e" ||
         caractere === "i" ||
         caractere === "o" ||
         caractere === "u"
      )) ||
   (caractere >= "A" &&
      caractere <= "Z" &&
      !(
         caractere === "A" ||
         caractere === "E" ||
         caractere === "I" ||
         caractere === "O" ||
         caractere === "U"
      ))
) {
   return "Consoante";
} else {
   return `${caractere} não é uma letra válida`;
}
