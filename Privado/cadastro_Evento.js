document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const dataHora = document.getElementById('data_hora').value;
    const descricao = document.getElementById('descricao').value.trim();
    const idEventos = document.getElementById('id_eventos').value;
    const ingressos = document.getElementById('ingressos').value;
    const localEvento = document.getElementById('local_evento').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const preco = document.getElementById('preco').value;

    function validarCampos() {
        if (!dataHora) {
            alert("Por favor, insira a data e hora do evento.");
            return false;
        }
        
        if (descricao.length < 10) {
            alert("A descrição deve ter pelo menos 10 caracteres.");
            return false;
        }
        
        if (idEventos <= 0) {
            alert("O ID do evento deve ser um número positivo.");
            return false;
        }
        
        if (ingressos <= 0) {
            alert("O número de ingressos deve ser maior que zero.");
            return false;
        }
        
        if (localEvento.length < 5) {
            alert("O local do evento deve ter pelo menos 5 caracteres.");
            return false;
        }
        
        if (nome.length < 3) {
            alert("O nome do evento deve ter pelo menos 3 caracteres.");
            return false;
        }
        
        if (preco <= 0) {
            alert("O preço deve ser maior que zero.");
            return false;
        }

        return true;
    }

    if (validarCampos()) {
        console.log("Data e Hora: " + dataHora);
        console.log("Descrição: " + descricao);
        console.log("ID do Evento: " + idEventos);
        console.log("Ingressos Disponíveis: " + ingressos);
        console.log("Local do Evento: " + localEvento);
        console.log("Nome do Evento: " + nome);
        console.log("Preço do Ingresso: " + preco);

        alert("Evento cadastrado com sucesso!");

        // Opcional: Resetar o formulário após o envio
        document.getElementById('eventForm').reset();
    }
});