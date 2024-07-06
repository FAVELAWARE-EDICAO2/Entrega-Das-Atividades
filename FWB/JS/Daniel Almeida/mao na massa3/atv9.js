// Criação do array tasks com algumas tarefas iniciais
let tasks = ["Ir pro FavelaWare", "Aprender sobre chatbot", "Voltar pra casa"];


tasks.push("Ir tomar banho");

let Removertarefa = 1;
tasks.splice(Removertarefa, 1);

tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
});
