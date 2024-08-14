async function fetchUser() {
     try{
        //verifivar a solicitação GET para a api
           const response = await fetch ('https://jsonplaceholder.typicode.com/users');
   
  //verificar se a resposta esta ok
     if (!response.ok) {
        throw new Error('deu zebra');

     }
     //extrair os dados em formato json
     const users = await response.json();
     //selecionar o elemento da lista no html
     const usersList = document.getElementById('user-list');
     users.forEach (user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = user.name;
        usersList.appendChild(listItem);

     });

    }catch(error){
        console.error('deu error',error);
    }
    
}
 window.onload = fetchUser;