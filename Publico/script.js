document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('Rsenha')
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');
    const nomeInput = document.getElementById('nome').;
    const nomeError = document.getElementById('nomeError');
    const telefoneInput = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefoneError');
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpfError');
    const confirmarSenhaError = document.getElementById('confirmarSenhaError');

    form.addEventListener('submit', function(event){
    event.preventDefault();
    
    emailError.textContent = '';
    senhaError.textContent = '';
    nomeError.textContent = '';
    telefoneError.textContent = '';
    cpfError.textContent = '';
    confirmarSenhaError.textContent = '';

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
    const confirmarSenha = confirmarSenhaInput.value.trim();
    if (senha !== confirmarSenha) {
        confirmarSenhaError.textContent = 'As senhas não coincidem.';
        return;
    }
//validar nome
var regexNome = /^[a-zA-Zà-úÀ-Ú\s]+$/;
if (!regexNome.test(nome)) {
    alert("Nome inválido! Insira apenas letras.");
    return false;
}
// Valida telefone
telefoneInput.addEventListener('input', function() {
    telefoneInput.value = telefoneInput.value.replace(/\D/g, '');
});

//validar cpf
const cpf = cpfInput.value.trim();
cpfInput.addEventListener('input', function() {
    const formattedCPF = formatCPF(cpfInput.value);
    cpfInput.value = formattedCPF;  
});
function formatCPF(cpf) {
   
    cpf = cpf.replace(/\D/g, '');

   
    if (cpf.length <= 3) {
        return cpf;
    }
    if (cpf.length <= 6) {
        return cpf.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    }
    if (cpf.length <= 9) {
        return cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    }
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
}

function validatecpf(cpf) {
    cpf = cpf.replace(/\D/g, ''); 

   
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    
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
 // Simula o cadastro bem-sucedido
 setTimeout(() => {
    alert('Cadastro realizado com sucesso!');
    form.reset(); 
    window.location.href = 'login.html';
}, 1000); 
});
});
