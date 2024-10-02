const formularioevento = document.getElementById('eventForm');
const enderecoAPI = 'http://localhost:4000/evento';


formularioevento.onsubmit = function (event) {
    event.preventDefault(); 
    if (validarcampos()) {
        gravarevento(); 
    }
};

function gravarevento() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const local_evento = document.getElementById('local_evento').value;
    const data_hora = document.getElementById('data_hora').value;
    const ingressos = document.getElementById('ingressos').value;
    const preco = document.getElementById('preco').value;


    const objetoEvento = {
        nome,
        descricao,
        local_evento,
        data_hora,
        ingressos: parseInt(ingressos, 10), 
        preco: parseFloat(preco) 
    };

    fetch(enderecoAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoEvento) 
    })
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status} ${resposta.statusText}`);
        }
        return resposta.json(); 
    })
    .then(retorno => {
        if (retorno.status === true) {
            exibirmensagem(retorno.mensagem, 'green'); 
        } else {
            exibirmensagem(retorno.mensagem, 'red'); 
        }
    })
    .catch(erro => {
        exibirmensagem(`Erro ao gravar evento: ${erro.message}`, 'yellow');
    });
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
        exibirmensagem("Preencha todos os campos.", 'red'); 
        return false; 
    }
}

function exibirmensagem(mensagem, cor ='black') {   
    const divmensagem = document.getElementById('mensagem');  
    divmensagem.innerHTML = `<p style='color:${cor};'>${mensagem}</p>`;
    setTimeout(() => {
        divmensagem.innerHTML = "";
    }, 5000);
}
