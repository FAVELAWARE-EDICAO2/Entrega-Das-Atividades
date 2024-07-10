
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}


let numeros = [11, 20, 3, 41, 5, 67, 7, 83, 97];

for (let i = 0; i < numeros.length; i++) {
    if (isPrime(numeros[i])) {
        console.log(`O número ${numeros[i]} na posição ${i} é primo.`);
    }
}
