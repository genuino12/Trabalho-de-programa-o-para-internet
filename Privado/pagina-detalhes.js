
function calculateTotal(eventSection) {
    const quantityInput = eventSection.querySelector('.ticket-quantity');
    const ticketPrice = parseFloat(eventSection.querySelector('.ticket-price').textContent);
    const totalPriceInput = eventSection.querySelector('.total-price');

    const totalPrice = (quantityInput.value * ticketPrice).toFixed(2);
    totalPriceInput.value = totalPrice;
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
    const purchaseButton = section.querySelector('button[id^="purchase-button"]');
    quantityInput.addEventListener('input', () => calculateTotal(section));

    purchaseButton.addEventListener('click', () => showPurchaseMessage(section));

    document.getElementById('purchase-button').addEventListener('click', function() {
        const paymentMethod = document.getElementById('payment-method').value;
    
        if (paymentMethod === 'registered-card') {
            alert("Pagamento realizado com o cartão final 1234.");
        } else if (paymentMethod === 'registered-card-2') {
            alert("Pagamento realizado com o cartão final 5678.");
        } else {
            alert("Por favor, escolha um método de pagamento válido.");
        }
    });

    calculateTotal(section);
    
});

