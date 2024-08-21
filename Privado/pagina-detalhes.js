// Função para calcular o valor total de um evento específico
function calculateTotal(eventSection) {
    const quantityInput = eventSection.querySelector('.ticket-quantity');
    const ticketPrice = parseFloat(eventSection.querySelector('.ticket-price').textContent);
    const totalPriceInput = eventSection.querySelector('.total-price');

    const totalPrice = (quantityInput.value * ticketPrice).toFixed(2);
    totalPriceInput.value = totalPrice;
}

// Função para exibir mensagem de confirmação da compra
function showPurchaseMessage(eventSection) {
    const purchaseMessage = eventSection.querySelector('.purchase-message');
    const totalPrice = eventSection.querySelector('.total-price').value;
    const quantity = eventSection.querySelector('.ticket-quantity').value;

    purchaseMessage.textContent = `Compra realizada com sucesso! Você comprou ${quantity} ingresso(s) por um total de R$ ${totalPrice}.`;
    purchaseMessage.style.color = 'green'; // Cor verde para mensagem de sucesso

    // Esconder a mensagem após alguns segundos (opcional)
    setTimeout(() => {
        purchaseMessage.textContent = '';
    }, 1000);
}

// Adiciona eventos para cada seção de evento
document.querySelectorAll('section[id^="event-"]').forEach(section => {
    const quantityInput = section.querySelector('.ticket-quantity');
    const purchaseButton = section.querySelector('button[id^="purchase-button"]');

    // Atualiza o valor total ao alterar a quantidade de ingressos
    quantityInput.addEventListener('input', () => calculateTotal(section));

    // Exibe mensagem de confirmação ao clicar no botão de compra
    purchaseButton.addEventListener('click', () => showPurchaseMessage(section));

    // Inicializa o cálculo do valor total
    calculateTotal(section);
});
