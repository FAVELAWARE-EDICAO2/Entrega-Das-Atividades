class Livros{
constructor(titulo,autor,anoDePublicacao){
    this.titulo=titulo;
    this.autor=autor;
    this.anoDePublicacao=anoDePublicacao;  }
}


class Biblioteca {
    constructor(){
        this.catalogo=[]
    }

    
    adicionarLivro(livros){
        this.catalogo.push(livros)
        console.log("Adicionado:", livros.titulo, livros.autor, livros.anoDePublicacao);

}


listarLivros(livros){
    this.catalogo.forEach(livros => {
        console.log (`-  ${livros.titulo} ,${livros.autor}, ${livros.anoDePublicacao}`);
    }
)
}
removerLivros(titulo){
    let indice = this.catalogo.findIndex(livros => livros.titulo === titulo);
    if (indice !== -1) {
        this.catalogo.splice(indice, 1);
        console.log(`Livro "${titulo}" removido da biblioteca.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
    }

}
}

const novolivro= new  Livros("Harry Potter e a Ordem da Fênix","J. K. Rowling",2003  );
const novolivro2= new Livros ("Divertida Mente","Elise Allen",2022  );

const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro(novolivro);
minhaBiblioteca.adicionarLivro(novolivro2);

minhaBiblioteca.listarLivros()
minhaBiblioteca.removerLivros("Divertida Mente")




// let Biblioteca = [
//     { titulo: "Harry Potter e a Ordem da Fênix", autor: "J. K. Rowling", anoDePublicacao: 2003 },
//     { titulo: "Divertida Mente", autor: "Elise Allen", anoDePublicacao: 2022 },
//     { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoDePublicacao: 1954 },
//     { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", anoDePublicacao: 1967 }
// ];

