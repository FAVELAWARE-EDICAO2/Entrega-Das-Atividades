document.getElementById('matriculaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('php/processa_matricula.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Matrícula realizada com sucesso!');
                document.getElementById('matriculaForm').reset();
            } else {
                alert('Ocorreu um erro ao realizar a matrícula. Por favor, tente novamente.');
            }
        });
});

k