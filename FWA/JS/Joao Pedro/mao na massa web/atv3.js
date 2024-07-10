
// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Seleciona a lista de carrinho pelo ID
    const listaCarrinho = document.getElementById('listaCarrinho');

    // Cria um novo elemento <li>
    const novoItem = document.createElement('li');

    // Define o conteúdo do <li> com nome do produto e preço formatado
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2)}`; // Exemplo de formatação do preço

    // Adiciona o novo <li> como filho da lista de carrinho
    listaCarrinho.appendChild(novoItem);
}

// Função para lidar com o clique no botão "Adicionar ao Carrinho"
document.getElementById('adicionarAoCarrinhoBtn').addEventListener('click', function() {
    // Exemplo: Você pode chamar adicionarAoCarrinho com os dados do produto
    const nomeProduto = 'Camiseta';
    const precoProduto = 29.99;
    adicionarAoCarrinho(nomeProduto, precoProduto);
});
