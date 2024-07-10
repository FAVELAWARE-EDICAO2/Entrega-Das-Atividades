let strings = ["casa", "carro", "árvore", "banana", "lua", "sol"];


strings = strings.filter(str => str.length >= 5);


strings = strings.map(str => str.toUpperCase());


strings.sort();


console.log("Array resultante:", strings);