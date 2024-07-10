// Cria um botão dinamicamente
const botaoToggle = document.createElement('button');
botaoToggle.textContent = 'Mostrar/Esconder Elemento';

// Cria um elemento de exemplo para ser mostrado/escondido
const elementoParaMostrarEsconder = document.createElement('div');
elementoParaMostrarEsconder.textContent = 'Este é o elemento para mostrar/esconder.';
elementoParaMostrarEsconder.style.display = 'block'; // Inicia visível

// Adiciona um evento de clique ao botão
botaoToggle.addEventListener('click', function() {
    // Verifica o estado atual de exibição do elemento
    if (elementoParaMostrarEsconder.style.display === 'block') {
        // Se está visível, esconde
        elementoParaMostrarEsconder.style.display = 'none';
        botaoToggle.textContent = 'Mostrar Elemento'; // Altera o texto do botão
    } else {
        // Se está escondido, mostra
        elementoParaMostrarEsconder.style.display = 'block';
        botaoToggle.textContent = 'Esconder Elemento'; // Altera o texto do botão
    }
});

// Adiciona o botão e o elemento ao corpo do documento
document.body.appendChild(botaoToggle);
document.body.appendChild(elementoParaMostrarEsconder);

// Estilizações opcionais para melhor visualização
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
elementoParaMostrarEsconder.style.marginTop = '20px';
botaoToggle.style.padding = '10px 20px';
botaoToggle.style.fontSize = '16px';
botaoToggle.style.backgroundColor = '#007bff';
botaoToggle.style.color = 'white';
botaoToggle.style.border = 'none';
botaoToggle.style.cursor = 'pointer';
botaoToggle.style.borderRadius = '5px';
botaoToggle.style.transition = 'background-color 0.3s ease';

// Efeito hover para o botão
botaoToggle.addEventListener('mouseover', function() {
    botaoToggle.style.backgroundColor = '#0056b3';
});
botaoToggle.addEventListener('mouseout', function() {
    botaoToggle.style.backgroundColor = '#007bff';
});
