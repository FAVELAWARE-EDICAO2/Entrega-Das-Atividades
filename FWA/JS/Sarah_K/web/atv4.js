
document.getElementById('botao').addEventListener('click', function() {
    
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

   
    if (isNaN(idade)) {
        alert('Por favor, insira uma idade válida.');
        return;     }

  
    let mensagem = `Olá, ${nome}!`;

    
    if (idade >= 18) {
        mensagem += ' Você é maior de idade.';
    } else {
        mensagem += ' Você é menor de idade.';
    }

    document.getElementById('mensagem').textContent = mensagem;
});