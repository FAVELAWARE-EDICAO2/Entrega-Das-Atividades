// Cria um elemento de contador
const contadorElemento = document.createElement('div');
contadorElemento.textContent = '0';
contadorElemento.style.fontSize = '24px';
contadorElemento.style.marginBottom = '10px';

// Cria botões para aumentar e diminuir
const botaoAumentar = document.createElement('button');
botaoAumentar.textContent = '+';
botaoAumentar.style.marginRight = '10px';
botaoAumentar.style.padding = '5px 10px';
botaoAumentar.style.fontSize = '16px';
botaoAumentar.style.backgroundColor = '#28a745';
botaoAumentar.style.color = 'white';
botaoAumentar.style.border = 'none';
botaoAumentar.style.cursor = 'pointer';
botaoAumentar.style.borderRadius = '5px';

const botaoDiminuir = document.createElement('button');
botaoDiminuir.textContent = '-';
botaoDiminuir.style.padding = '5px 10px';
botaoDiminuir.style.fontSize = '16px';
botaoDiminuir.style.backgroundColor = '#dc3545';
botaoDiminuir.style.color = 'white';
botaoDiminuir.style.border = 'none';
botaoDiminuir.style.cursor = 'pointer';
botaoDiminuir.style.borderRadius = '5px';

// Função para aumentar o contador
function aumentarContador() {
    let valorAtual = parseInt(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual + 1;
}

// Função para diminuir o contador
function diminuirContador() {
    let valorAtual = parseInt(contadorElemento.textContent);
    if (valorAtual > 0) {
        contadorElemento.textContent = valorAtual - 1;
    }
}

// Adiciona eventos de clique aos botões
botaoAumentar.addEventListener('click', aumentarContador);
botaoDiminuir.addEventListener('click', diminuirContador);

// Adiciona os elementos ao corpo do documento
document.body.appendChild(contadorElemento);
document.body.appendChild(botaoAumentar);
document.body.appendChild(botaoDiminuir);

// Estilização opcional para melhor visualização
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
