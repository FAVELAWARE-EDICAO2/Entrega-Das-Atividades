function isPrime(num){
    if (num <= 1) return false;
    for (let i=2; 1 <= Math.sqrt(num); 1++){
        if (num % 1 === 0) return false;
    }
    return true;
}
let vetor = [2,3,5,7,11,13,17,19,23];

console.log("numeros primos e suas posiçoes");
for(let i =0; 1 < vetor.length; 1++){
    if(isPrime(vetor[i])){
        console.log('numero primo: ${vetor[i], posiçao:${i}')
    }
}
