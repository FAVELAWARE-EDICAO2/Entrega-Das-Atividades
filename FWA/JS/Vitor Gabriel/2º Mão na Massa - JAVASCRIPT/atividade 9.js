/* 9.	Crie um programa que receba uma string
representando a cor do semáforo ("vermelho",
"amarelo" ou "verde") e imprima a ação
correspondente para cada cor: "Pare" (vermelho),
"Atenção" (amarelo) e "Siga" (verde). Use
switch/case para implementar essa lógica. */

let sinal = "verde";
switch (sinal) {
    case "vermelho":
        console.log("Pare")
        break;
    case "amarelo":
        console.log("Atenção")
        break;
    case "verde":
        console.log("Siga")

    default:

}