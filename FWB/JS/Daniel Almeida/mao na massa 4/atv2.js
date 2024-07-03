class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    removerTarefa(descricao) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.descricao !== descricao);
    }

    listarTarefas() {
        return this.tarefas.map(tarefa => `${tarefa.descricao} - ${tarefa.concluida ? 'Concluída' : 'Pendente'}`).join('\n');
    }

    marcarComoConcluida(descricao) {
        const tarefa = this.tarefas.find(tarefa => tarefa.descricao === descricao);
        if (tarefa) {
            tarefa.concluida = true;
        }
    }
}


const gerenciador = new GerenciadorDeTarefas();

const tarefa1 = new Tarefa('Mentir sobre usar chtagpt');
const tarefa2 = new Tarefa('Ir embora');

gerenciador.adicionarTarefa(tarefa1);
gerenciador.adicionarTarefa(tarefa2);

console.log(gerenciador.listarTarefas(true));

gerenciador.marcarComoConcluida('Mentir sobre usar chatgpt');
console.log(gerenciador.listarTarefas());

gerenciador.removerTarefa('Ir embora');
console.log(gerenciador.listarTarefas());
