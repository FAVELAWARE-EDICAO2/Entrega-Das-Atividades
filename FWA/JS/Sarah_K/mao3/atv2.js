function avaliarpesoa(altura, beleza, carisma){

if(altura>7 && beleza>7 && carisma> 7){
console.log("Boraaa");
} else if((altura>7 && beleza>7) || (altura>7 && carisma>7) || (beleza>7 && carisma>7)){
    console.log("vai");
}else if(altura>7 || beleza>7|| carisma>7){
    console.log("Fé em Deus");
}
else{
    console.log("Credo");
}


}

avaliarpesoa(8,8,8);//bora
avaliarpesoa(6,8,9);//vai
avaliarpesoa(8,4,3);// fé em deus
avaliarpesoa(3,4,5);// credo
