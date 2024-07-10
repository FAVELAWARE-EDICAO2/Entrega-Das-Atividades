// Seleciona o formulário pelo ID
const formulario = document.getElementById('formulario');

// Seleciona a lista <ul> onde os itens serão inseridos
const listaItens = document.getElementById('listaItens');

// Adiciona um ouvinte de evento para o evento de submit do formulário
formulario.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // Obtém o valor do campo de texto do formulário
    const novoItem = document.getElementById('item').value;

    // Cria um novo elemento <li>
    const novoElemento = document.createElement('li');

    // Define o texto do novo <li> com o valor do campo de texto
    novoElemento.textContent = novoItem;

    // Adiciona o novo <li> como filho da lista <ul>
    listaItens.appendChild(novoElemento);

    // Limpa o campo de texto do formulário após adicionar o item
    document.getElementById('item').value = '';
});
