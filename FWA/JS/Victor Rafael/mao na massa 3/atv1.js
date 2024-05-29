function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let vetor = [2, 3, 4, 5, 6, 7, 8, 9, 11];

for (let i = 0; i < vetor.length; i++) {
    if (isPrime(vetor[i])) {
        console.log(`Número primo ${vetor[i]} na posição ${i}`);
    }
}
