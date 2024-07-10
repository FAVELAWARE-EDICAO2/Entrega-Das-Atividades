// Cria um parágrafo com texto inicial
const paragrafo = document.createElement('p');
paragrafo.textContent = 'Este é um texto inicial.';

// Cria um botão
const botao = document.createElement('button');
botao.textContent = 'Alterar Texto';

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Altera o texto do parágrafo quando o botão é clicado
    paragrafo.textContent = 'Novo texto alterado!';
});

// Adiciona o parágrafo e o botão ao corpo do documento
document.body.appendChild(paragrafo);
document.body.appendChild(botao);

// Estilizações opcionais para melhor visualização
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
paragrafo.style.fontSize = '18px';
paragrafo.style.color = '#333';
botao.style.padding = '10px 20px';
botao.style.fontSize = '16px';
botao.style.backgroundColor = '#007bff';
botao.style.color = 'white';
botao.style.border = 'none';
botao.style.cursor = 'pointer';
botao.style.marginTop = '10px';
botao.style.borderRadius = '5px';
botao.style.transition = 'background-color 0.3s ease';

// Efeito hover para o botão
botao.addEventListener('mouseover', function() {
    botao.style.backgroundColor = '#0056b3';
});
botao.addEventListener('mouseout', function() {
    botao.style.backgroundColor = '#007bff';
});
