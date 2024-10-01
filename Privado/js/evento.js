const formularioevento = document.getElementById('eventForm');


formularioevento.onsubmit = function(event) {
    event.preventDefault();
    
   
    if (validarcampos()) {
        gravarevento();
    }
};

function gravarevento() {
    
    exibirmensagem("Evento cadastrado com sucesso!");
}

function validarcampos() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const local_evento = document.getElementById('local_evento').value;
    const data_hora = document.getElementById('data_hora').value;
    const ingressos = document.getElementById('ingressos').value;
    const preco = document.getElementById('preco').value;

    
    if (nome && descricao && local_evento && data_hora && ingressos && preco) {
        return true;
    } else {
        exibirmensagem("Preencha todos os campos.");
        return false;
    }
}

function exibirmensagem(mensagem) {
    
    const divmensagem = document.getElementById('mensagem');
    
   
    divmensagem.innerHTML = "<p>" + mensagem + "</p>";


    setTimeout(() => {
        divmensagem.innerHTML = "";
    }, 5000);
}
