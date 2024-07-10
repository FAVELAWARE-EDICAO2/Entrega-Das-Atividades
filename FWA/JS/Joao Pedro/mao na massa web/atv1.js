document.addEventListener("DOMContentLoaded", function() {
    // Capturar o elemento com id lista
    var lista = document.getElementById("lista");

    // Capturar o botão com id botao
    var botao = document.getElementById("botao");

    // Contador para controlar o número do próximo item
    var contador = 3;

    // Adicionar evento de clique ao botão
    botao.addEventListener("click", function() {
        // Criar um novo item <li>
        var novoItem = document.createElement("li");
        novoItem.textContent = "Novo Item " + contador;

        // Incrementar o contador para o próximo item
        contador++;

        // Adicionar o novo item à lista
        lista.appendChild(novoItem);
    });
});
