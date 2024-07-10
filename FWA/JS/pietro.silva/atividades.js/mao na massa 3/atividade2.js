let altura = parseInt(prompt('Qual a nota para a altura?'));
let beleza = parseInt(prompt('Qual a nota para a beleza?'));
let carisma = parseInt(prompt('Qual a nota para a carisma?'));

if (beleza & altura & (carisma > 7)) {
  console.log('Booooraa trem!');
} else if (
  ((beleza > 7) & (carisma > 7)) |
  ((carisma > 7) & (altura > 7)) |
  ((beleza > 7) & (altura > 7))
) {
  console.log(' É o que tem, so vai...');
} else if (
  (beleza & (altura < 7)) |
  (carisma & (altura < 7)) |
  (carisma & (beleza < 7))
) {
  console.log('Fé amigas, fé em Deus...');
} else {
  console.log('Crendospai, misericordia!!');
}