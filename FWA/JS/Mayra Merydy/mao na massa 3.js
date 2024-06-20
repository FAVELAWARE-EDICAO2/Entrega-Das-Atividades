 //2
function avaliarPessoa (altura,beleza,carisma){
    if(altura >7 && beleza >7 && carisma >7){
        console.log("booooooraa...")
    }
    else if((altura >7 && beleza >7)||(altura >7 && carisma >7)||(carisma >7 && beleza >7)){
       console.log("só vaaai ...");
    }

    else if((carisma>7)||(beleza>7)||(altura>7)){
        console.log("fé em Deus...");}

        else  {
    console.log("Misericordia...");}
        }
//-----------------------------------------------------------------------------,

  //1
   function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false
    return num > 1;
}

const a = [1, 2, 3, 4, 5,6,7,8,9];

for (const numero of a) {
    console.log(`${numero} é primo? ${isPrime(numero)}`);
}
//------------------------------------------------------------------------------