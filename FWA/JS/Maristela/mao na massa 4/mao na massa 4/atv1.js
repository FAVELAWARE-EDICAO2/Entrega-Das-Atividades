 adicionar_livro(biblioteca)

  Argumentos:
    biblioteca (list)

  Retorno:
    None

  titulo = input("Digite o título do livro: ")
  autor = input("Digite o autor do livro: ")
  ano_publicacao = int(input("Digite o ano de publicação do livro: "))
  novo_livro = Livro(titulo, autor, ano_publicacao)
  biblioteca.append(novo_livro)
  print(f)

 remover_livro(biblioteca)

  Argumentos:
    biblioteca (list)

  Retorno:
    None

  if
    ("A biblioteca está vazia!")
    return

  for1

  if (biblioteca)
    livro_removido = biblioteca.pop(indice_livro)
    print(f)

    print("Índice inválido!")

 listar_livros(biblioteca)

  Argumentos:
    biblioteca (list)

  Retorno:
    None

  if
    ("A biblioteca está vazia!")
    return

  print("\nLista de Livros:")






  class Biblioteca

     Argumento
      titulo (str)
    
    forlivros
      iftitulo == titulo
        self.livros.remove(livro)
        return True 
    return False 

   listarLivros(self)
    
    iflivros
      print("A biblioteca está vazia!")
  
      forlivros:
      "- {livro}"