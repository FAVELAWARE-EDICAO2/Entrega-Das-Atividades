// Definição da classe Livro
class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
}

// Definição da classe Biblioteca
class Biblioteca {
    constructor() {
        this.livros = [];
    }

    // Método para adicionar um livro à biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    // Método para remover um livro pelo título
    removerLivro(titulo) {
        this.livros = this.livros.filter(livro => livro.titulo !== titulo);
    }

    // Método para listar todos os livros na biblioteca
    listarLivros() {
        console.log("Livros na Biblioteca:");
        this.livros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}`);
        });
    }
}

// Exemplo de uso:

// Criando alguns livros
let livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
let livro2 = new Livro("Cem Anos de Solidão", "Gabriel García Márquez", 1967);
let livro3 = new Livro("1984", "George Orwell", 1949);

// Criando uma nova biblioteca
let biblioteca = new Biblioteca();

// Adicionando os livros à biblioteca
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

// Listando os livros na biblioteca
biblioteca.listarLivros();

// Removendo um livro pelo título
biblioteca.removerLivro("Dom Quixote");

// Listando os livros novamente após a remoção
biblioteca.listarLivros();
