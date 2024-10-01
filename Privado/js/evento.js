const formularioevento = document.getElementById('eventForm').value;
formularioevento.onsubmit = validarcampos;

function gravarevento(){}

function excluirevento(){}

function atualizarevento(){}

function buscartodoseventos(){}

function validarcampos(){
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const local_evento = document.getElementById('local_evento').value;
    const data_hora = document.getElementById('data_hora').value;
    const ingressos = document.getElementById('ingressos').value;
    const preco = document.getElementById('preco').value;

    if(nome && descricao && local_evento && data_hora && ingressos && preco){
        return true;
    }
    else {
        return false;
    }
}

function exibirtabelaevento(){}