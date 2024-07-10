document.addEventListener("DOMContentLoaded", function() {
    
    var lista = document.getElementById("lista");

   
    var botao = document.getElementById("botao");

   
    var contador = 3;

    
    botao.addEventListener("click", function() {
      
        var novoItem = document.createElement("li");
        novoItem.textContent = "Novo Item " + contador;

        contador++;

       
        lista.appendChild(novoItem);
    });
});
