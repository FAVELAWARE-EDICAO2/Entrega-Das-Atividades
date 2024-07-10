document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para evitar o recarregamento da página

    // Obtém o valor do CPF digitado pelo usuário
    let cpf = document.getElementById('cpfInput').value.trim();

    // Remove qualquer formatação que possa ter sido inserida
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        displayError('O CPF deve conter 11 dígitos.');
        return;
    }

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (cpf.match(/^(\d)\1{10}$/)) {
        displayError('CPF inválido.');
        return;
    }

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let firstDigit = sum % 11;
    if (firstDigit < 2) {
        firstDigit = 0;
    } else {
        firstDigit = 11 - firstDigit;
    }

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let secondDigit = sum % 11;
    if (secondDigit < 2) {
        secondDigit = 0;
    } else {
        secondDigit = 11 - secondDigit;
    }

    // Verifica se os dígitos verificadores calculados são iguais aos digitados pelo usuário
    if (firstDigit !== parseInt(cpf.charAt(9)) || secondDigit !== parseInt(cpf.charAt(10))) {
        displayError('CPF inválido.');
        return;
    }

    // Se passou por todas as validações, o CPF é válido
    displaySuccess('CPF válido.');
});

function displayError(message) {
    document.getElementById('result').innerHTML = `<p class="error">${message}</p>`;
}

function displaySuccess(message) {
    document.getElementById('result').innerHTML = `<p>${message}</p>`;
}
