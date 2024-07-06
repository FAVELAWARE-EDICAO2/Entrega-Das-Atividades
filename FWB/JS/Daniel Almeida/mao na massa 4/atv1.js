class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    toString() {
        return `'${this.titulo}' por ${this.autor}, publicado em ${this.ano}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro '${livro.titulo}' adicionado à biblioteca.`);
    }

    removerLivro(titulo) {
        const index = this.livros.findIndex(livro => livro.titulo === titulo);
        if (index !== -1) {
            this.livros.splice(index, 1);
            console.log(`Livro '${titulo}' removido da biblioteca.`);
        } else {
            console.log(`Livro '${titulo}' não encontrado na biblioteca.`);
        }
    }

    listarLivros() {
        if (this.livros.length === 0) {
            console.log("A biblioteca está vazia.");
        } else {
            this.livros.forEach(livro => console.log(livro.toString()));
        }
    }
}

// Exemplo de uso:
const biblioteca = new Biblioteca();
const livro1 = new Livro("Coraline", "Neil Gaiman", 2002);
const livro2 = new Livro("A Series of Unfortunate Events", "Lemony snicket", 1999);
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

biblioteca.listarLivros();

biblioteca.removerLivro("1899");
biblioteca.listarLivros();
biblioteca.removerLivro("1984"); 
