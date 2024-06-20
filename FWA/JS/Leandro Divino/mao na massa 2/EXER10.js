let mes = parseInt(prompt("Digite um número de um mês"))
let meseEstacao
switch (mes){
    case 1:
    case 2:
    case 12:
        console.log("A estação de seu mês é o verão.");
        break;
        case 3:
    case 4:
    case 5:
        console.log("A estação de seu mês é o outono.")
        break;
        case 6:
    case 7 :
    case 8:
        console.log("A estação de seu mes é o inverno")
        break;
        case 9:
    case 10:
    case 11:
        console.log("A estação de seu mês é a primavera")
        default:
        console.log("Por favor insira i=um mes valido")
}
