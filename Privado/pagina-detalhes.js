document.addEventListener('DOMContentLoaded', () => {
    function calculateTotal(eventSection) {
        const quantityInput = eventSection.querySelector('.ticket-quantity');
        const ticketPrice = parseFloat(eventSection.querySelector('.ticket-price').textContent.replace(',', '.'));
        const totalPriceInput = eventSection.querySelector('.total-price');

        // Verifica se quantityInput e totalPriceInput existem
        if (quantityInput && totalPriceInput) {
            const quantity = parseFloat(quantityInput.value);
            if (!isNaN(quantity) && quantity > 0) {
                const totalPrice = (quantity * ticketPrice).toFixed(2);
                totalPriceInput.value = totalPrice.replace('.', ','); // Atualiza o valor exibido no campo de entrada
            } else {
                totalPriceInput.value = '00,00'; // Define um valor padrão se a quantidade for inválida
            }
        }
    }

    function showPurchaseMessage(eventSection) {
        const purchaseMessage = eventSection.querySelector('.purchase-message');
        const totalPrice = eventSection.querySelector('.total-price').value;
        const quantity = eventSection.querySelector('.ticket-quantity').value;

        purchaseMessage.textContent = `Compra realizada com sucesso! Você comprou ${quantity} ingresso(s) por um total de R$ ${totalPrice}.`;
        purchaseMessage.style.color = 'green'; 

        setTimeout(() => {
            purchaseMessage.textContent = '';
        }, 5000);
    }

    document.querySelectorAll('section[id^="event-"]').forEach(section => {
        const quantityInput = section.querySelector('.ticket-quantity');
        const purchaseButton = section.querySelector('.purchase-button');
        const paymentMethodSelect = section.querySelector('.payment-method');

        if (quantityInput && purchaseButton && paymentMethodSelect) {
            quantityInput.addEventListener('input', () => calculateTotal(section));

            purchaseButton.addEventListener('click', () => {
                const paymentMethod = paymentMethodSelect.value;

                if (paymentMethod === 'registered-card') {
                    showPurchaseMessage(section);
                    alert("Pagamento realizado com o cartão final 1234.");
                } else if (paymentMethod === 'registered-card-2') {
                    showPurchaseMessage(section);
                    alert("Pagamento realizado com o cartão final 5678.");
                } else {
                    alert("Por favor, escolha um método de pagamento válido.");
                }
            });

            calculateTotal(section); // Inicializa o total ao carregar
        }
    });
});
