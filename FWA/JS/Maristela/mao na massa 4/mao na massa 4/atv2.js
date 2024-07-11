class Tarefa

   self.descricao (str) 
    concluida (bool) (True) (False).
  

   __init__(self, descricao)
    
    self.descricao = descricao
    self.concluida = False

   __str__(self)
    
     status (concluída).

    status = "Concluída".concluida 
    return 


class GerenciadorDeTarefas
  
 __init__(self)
    
    self.tarefas = []

   adicionarTarefa(self, descricao)
    
    

    Argumento:
      descricao (str)
    
    nova_tarefa = Tarefa(descricao)
    self.tarefas.append(nova_tarefa)
    print

 removerTarefa(self, descricao)
    

    Argumento:
      descricao (str)
    
    fortarefas:
      ifdescricao == descricao
        self.tarefas.remove(tarefa)
        print
        return
    print

   listarTarefas(self)
    
    iftarefas:
      print("Você não tem nenhuma tarefa cadastrada.")
    
      print("\nLista de Tarefas:")
      fortarefas
        print

 marcarComoConcluida(self, descricao)

    Argumento:
      descricao (str)
    
    fortarefas:
      ifdescricao == descricao
        tarefa.concluida = True
        print
        return
    print

 class Tarefa
    
      descricao (str)
      concluida (bool) (True) (False).
    
  
     __init__(self, descricao)
    
      self.descricao = descricao
      self.concluida = False
  
     __str__(self)
  
       status (concluída).
      
      status = "Concluída"
      return
  
  
  class GerenciadorDeTarefas
      
      fortarefas = []
  
     adicionarTarefa(self, descricao)
  
      Argumento:
        descricao (str)
      
      nova_tarefa = Tarefa(descricao)
      self.tarefas.append(nova_tarefa)
      print
  
      removerTarefa(self, descricao)
  
      Argumento:
        descricao (str)
      
      fortarefas:
        ifdescricao == descricao
          self.tarefas.remove(tarefa)
          print
          return
      print
  
     listarTarefas(self)
      
      iftarefas:
        print("Você não tem nenhuma tarefa cadastrada.")
      
        print("\nLista de Tarefas:")
        fortarefas
          print
  
     marcarComoConcluida(self, descricao)
  
      Argumento:
        descricao (str)
      
      fortarefas:
        ifdescricao == descricao
          tarefa.concluida = True
          print
          return
      print







