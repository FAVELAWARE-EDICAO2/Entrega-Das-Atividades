 function nomediasemana(numero) {
    switch(numero){
        case 1:
            console.log("domingo");
            break;
            case 2:
            console.log("segunda-feiras");
            break;
            case 3:
            console.log("terça-feira");
            break;
            case 4:
            console.log("quarta-feira");
            break;
            case 5:
            console.log("quinta-feira");
            break;
            case 6:
            console.log("sexta-feira");
            break;
            case 7:
            console.log("sabado");
            break;
            console.log("numero invalido");
            break;
    }
    
 }
 //tetando os dias da semana
 nomediasemana(1) // imprimir "domingo "
 nomediasemana(3) // imprimir "terça-feira "
 nomediasemana(7) // imprimir "sabado "
 nomediasemana(8) // imprimir "dia invalido "