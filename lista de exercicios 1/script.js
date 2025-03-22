function alterarCorLinha() {
    const linha = document.getElementById('botafogo');
    linha.style.backgroundColor = 'green'; 
}

function alterarCorLinhaPorId(id) {
    const linha = document.getElementById(id);
    linha.style.backgroundColor = 'yellow'; 
}

function mudarCorLinha(linha) {
    linha.style.backgroundColor = 'grey'; 
}

function restaurarCorLinha(linha) {
    linha.style.backgroundColor = ''; 
}

document.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', function() {
        const nomeTime = this.cells[2].innerHTML;
        alert(nomeTime);
        console.log(nomeTime);
    });
});
