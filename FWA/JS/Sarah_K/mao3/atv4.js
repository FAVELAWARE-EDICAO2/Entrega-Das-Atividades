const num = [3, 5, 7,9,11];

let mais1=num.push(13); // adiciona o elemento
console.log(mais1);

 let menos1 =num.shift();         //remove o primeiro elemento
console.log(menos1);

  let idex = num.indexOf(9); // mostra a "posição" do elemento na array
console.log(idex);

let ordem = num.sort() ; // ordem decrescente
console.log(ordem);

let ordem2 = num.reverse() ; // ordem reversa
console.log(ordem2);

let maiorq7 = num.filter(num => num >7);  //sem 7 aquis
console.log(maiorq7);

let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}

console.log(sum);