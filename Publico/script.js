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
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpfError');

    form.addEventListener('submit', function(event){
    event.preventDefault();
    
    emailError.textContent = '';
    senhaError.textContent = '';
    nomeError.textContent = '';
    telefoneError.textContent = '';
    cpfError.textContent = '';

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
const cpf = cpfInput.value.trim();
if (!validateCPF(cpf)) {
    cpfError.textContent = 'Por favor, insira um CPF válido.';
    return;
}
function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetitiva
    }

    // Função para calcular o dígito verificador
    function calcularDigito(cpf, peso) {
        let soma = 0;
        for (let i = 0; i < cpf.length; i++) {
            soma += cpf.charAt(i) * peso--;
        }
        let resto = (soma % 11);
        return (resto < 2) ? 0 : 11 - resto;
    }

    const digito1 = calcularDigito(cpf.substring(0, 9), 10);
    const digito2 = calcularDigito(cpf.substring(0, 10), 11);

    return cpf.charAt(9) == digito1 && cpf.charAt(10) == digito2;
}

});
});