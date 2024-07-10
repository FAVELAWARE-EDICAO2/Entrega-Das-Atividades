
const formulario = document.getElementById('formulario');

const listaItens = document.getElementById('listaItens');

formulario.addEventListener('submit', function(event) {
   
    event.preventDefault();

    
    const novoItem = document.getElementById('item').value;

   
    const novoElemento = document.createElement('li');

    
    novoElemento.textContent = novoItem;

    
    listaItens.appendChild(novoElemento);

    document.getElementById('item').value = '';
});
