
function adicionarAoCarrinho(nome, preco) {
   
    const listaCarrinho = document.getElementById('listaCarrinho');

    
    const novoItem = document.createElement('li');

   
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2)}`; 
    
    listaCarrinho.appendChild(novoItem);
}


document.getElementById('adicionarAoCarrinhoBtn').addEventListener('click', function() {
    
    const nomeProduto = 'Camiseta';
    const precoProduto = 29.99;
    adicionarAoCarrinho(nomeProduto, precoProduto);
});