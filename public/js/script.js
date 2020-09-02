inicializaBotaoNovaPergunta();

function inicializaBotaoNovaPergunta(){
    let botoes = document.querySelectorAll('.btn-nova-pergunta');

    for(var i=0; i<botoes.length; i++){
        botoes[i].addEventListener('click', novaPergunta);
    }
}

function novaPergunta(){
    
    let divPerguntas = document.getElementById('blocoPerguntas');

    let colWrap = document.createElement('div');
    colWrap.className = 'col-xs-12 mb-4';

    let rowWrap = document.createElement('div');
    rowWrap.className = 'row';

    let colPergunta = document.createElement('div');
    colPergunta.className = 'col-xs-11';

    let colBotaoRemover = document.createElement('div');
    colBotaoRemover.className = 'col-xs-1';

    let inputPergunta = document.createElement('input');
    inputPergunta.className = 'input-pergunta';
    inputPergunta.name = 'pergunta';
    inputPergunta.type = 'text';

    let botaoRemover = document.createElement('a');
    botaoRemover.className = 'btn-remover-pergunta';
    botaoRemover.textContent = 'X';
    botaoRemover.addEventListener('click', removerPergunta);

    colPergunta.append(inputPergunta);
    colBotaoRemover.append(botaoRemover);
    rowWrap.append(colPergunta);
    rowWrap.append(colBotaoRemover);
    colWrap.append(rowWrap);

    divPerguntas.append(colWrap);

}

function removerPergunta(){

    this.parentElement.parentElement.parentElement.remove();

}