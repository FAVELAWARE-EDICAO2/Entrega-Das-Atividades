// Seleciona o botão e adiciona um ouvinte de evento para o clique
document.getElementById('botao').addEventListener('click', function() {
    // Obtém os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

    // Verifica se o campo de idade está vazio ou não é um número válido
    if (isNaN(idade)) {
        alert('Por favor, insira uma idade válida.');
        return; // Encerra a execução da função se a idade não for válida
    }

    // Cria a mensagem de boas-vindas personalizada
    let mensagem = `Olá, ${nome}!`;

    // Verifica se o usuário é maior ou menor de idade
    if (idade >= 18) {
        mensagem += ' Você é maior de idade.';
    } else {
        mensagem += ' Você é menor de idade.';
    }

    // Exibe a mensagem na página
    document.getElementById('mensagem').textContent = mensagem;
});
