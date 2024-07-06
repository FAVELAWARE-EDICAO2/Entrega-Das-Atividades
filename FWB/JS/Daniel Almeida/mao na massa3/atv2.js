function tinder (altura,beleza,carisma){
    if(altura > 7 & beleza > 7 & carisma >7){
        console.log("boraaa")
    }
    else if(
        (altura > 7 & beleza > 7 ) || (altura > 7 & carisma > 7) || (beleza > 7 & carisma > 7)
    ){
        console.log("so vai...")
    }
    else if(
        altura > 7 & beleza > 7 || beleza >7 || carisma >7){
            console.log("Fe em Deus")
        }
     else (
        console.log("Misericordia")
)
}
tinder(8,9,10)// boraa
tinder(6,3,1) // misericordia
tinder(8,3,2) // Fe em Deus
tinder(8,9,2) // So vai