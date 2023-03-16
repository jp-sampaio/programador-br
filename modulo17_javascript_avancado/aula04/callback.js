//A função callback serve para uma função receber outra função como argumento.
//Callbacks são normalmente utilizados para continuar a execução do código após uma operação asynchronous ser terminada;

const membros = ["Manoel", "Lucas", "João", "Ruan", "Gurmecindo", "Ana", "Vitoria"];

function adiconarNovoMembro(nome, callback) {
    setTimeout(() => {
        membros.push(nome);
        callback();
    }, 3000);
}

function mostrarMembros() {
    console.log(membros);
}

adiconarNovoMembro("Magnifico", mostrarMembros);