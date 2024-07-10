let tasks = ["Comprar leite", "Estudar JavaScript", "Fazer exercícios"];


tasks.push("Ler um livro");


let indiceRemover = 1; 
tasks.splice(indiceRemover, 1);


tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
});
