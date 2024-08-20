document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');
    const nomeInput = document.getElementById('nome');
    const nomeError = document.getElementById('nomeError');
    const telefoneInput = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefoneError');

    form.addEventListener('submit', function(event){
    event.preventDefault();
    
    emailError.textContent = '';
    senhaError.textContent = '';
    nomeError.textContent = '';
    telefoneError.textContent = '';

    //validação do email
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        return;
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//validar senha
    const senha = senhaInput.value.trim();
    if (senha.length < 6) {
    senhaError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return;
}


//validar nome
const nome = nomeInput.value.trim();
if (nome.length < 5) {
    nomeError.textContent = 'O nome deve ter pelo menos 5 caracteres.';
    return;
}
// Valida telefone
const telefone = telefoneInput.value.trim();
 if (!validatePhone(telefone)) {
      telefoneError.textContent = 'Por favor, insira um número de telefone válido.';
      return;
}
function validatePhone(phone) {
    phone = phone.replace(/\D/g, '');
    const regex = /^\d{10,11}$/;
    return regex.test(phone);
}
});
});