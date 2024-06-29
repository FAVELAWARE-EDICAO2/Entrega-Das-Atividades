
const números = [3, 5, 7, 9, 11];

números.push(13);

números.shift();

const índiceDo9 = números.indexOf(9);

números.sort((a, b) => b - a);


números.reverse();


const númerosMaioresQue7 = números.filter(num => num > 7);


const somaDosNúmeros = números.reduce((acc, curr) => acc + curr, 0);


console.log("Array final:", números);
console.log("Soma dos elementos:", somaDosNúmeros);
