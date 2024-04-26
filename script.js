function cadastrarPaciente(){
    const nome = document.getElementById('nome').value;
    const especialidade = document.getElementById('especialidade').value;
    filas[especialidade].push(nome);
    localStorage.setItem('filas', JSON.stringify(filas));
    atualizarFila();
}

function chamarPaciente(especialidade) {
            filas[especialidade].shift();
            localStorage.setItem('filas', JSON.stringify(filas));
            atualizarFila();
        }

function atualizarFila() {
    const filaSeparadas = document.getElementById('fila');
    filaSeparadas.innerHTML = '';
    for (let especialidade in filas) {
        filaSeparadas.innerHTML += '<div class="espaco"/>'
        filaSeparadas.innerHTML += '<hr>'
        filaSeparadas.innerHTML += '<div class="espaco"/>'
        filaSeparadas.innerHTML += '<h2>' + especialidade.toUpperCase() + '</h2>';
        filaSeparadas.innerHTML += '<button onclick="chamarPaciente(\'' + especialidade + '\')">Chamar próximo</button>';
        filaSeparadas.innerHTML += '<ol>';
        for (let i = 0; i < filas[especialidade].length; i++) {
            filaSeparadas.innerHTML += '<li>' + filas[especialidade][i] + '</li>';
        }
        filaSeparadas.innerHTML += '</ol>';
    }
}

//carrega os dados do localStorage
onload = function() {
    const filasSalvas = localStorage.getItem('filas');
    if (filasSalvas) {
        filas = JSON.parse(filasSalvas);
    }
    atualizarFila();
}

let filas = {
    ORTOPEDIA: [],
    CARDIOLOGIA: [],
    PSIQUIATRIA: []
};