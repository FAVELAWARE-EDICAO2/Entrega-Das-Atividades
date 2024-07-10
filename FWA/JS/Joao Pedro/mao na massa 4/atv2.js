// Definição da classe Tarefa
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }
}

// Definição da classe GerenciadorDeTarefas
class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    // Método para adicionar uma nova tarefa
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    // Método para remover uma tarefa pela descrição
    removerTarefa(descricao) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.descricao !== descricao);
    }

    // Método para listar todas as tarefas
    listarTarefas() {
        console.log("Tarefas:");
        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida ? " (Concluída)" : " (Pendente)";
            console.log(`${tarefa.descricao}${status}`);
        });
    }

    // Método para marcar uma tarefa como concluída
    marcarComoConcluida(descricao) {
        let encontrada = false;
        this.tarefas.forEach(tarefa => {
            if (tarefa.descricao === descricao) {
                tarefa.concluida = true;
                encontrada = true;
            }
        });
        if (!encontrada) {
            console.log(`Tarefa "${descricao}" não encontrada.`);
        }
    }
}

// Exemplo de uso:

// Criando um gerenciador de tarefas
let gerenciador = new GerenciadorDeTarefas();

// Adicionando algumas tarefas
gerenciador.adicionarTarefa(new Tarefa("Estudar JavaScript"));
gerenciador.adicionarTarefa(new Tarefa("Fazer exercícios de matemática"));
gerenciador.adicionarTarefa(new Tarefa("Ler um livro"));

// Listando as tarefas
gerenciador.listarTarefas();

// Marcar uma tarefa como concluída
gerenciador.marcarComoConcluida("Estudar JavaScript");

// Listando as tarefas novamente após marcar uma como concluída
gerenciador.listarTarefas();

// Remover uma tarefa
gerenciador.removerTarefa("Fazer exercícios de matemática");

// Listando as tarefas após remover uma delas
gerenciador.listarTarefas();

// Tentar marcar uma tarefa que não existe
gerenciador.marcarComoConcluida("Tarefa inexistente");

// Listando as tarefas novamente para verificar o resultado
gerenciador.listarTarefas();
