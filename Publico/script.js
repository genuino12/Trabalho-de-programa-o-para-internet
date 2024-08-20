document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');
    const nomeInput = document.getElementById('nome');

    form.addEventListener('submit', function(event){
    event.preventDefault();
    
    emailError.textContent = '';
    senhaError.textContent = '';
    nomeError.textContent = '';

    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        return;
}
    const senha = senhaInput.value.trim();
    if (senha.length < 6) {
    senhaError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return;
}
if (email === 'teste@teste.com' && senha === '123456') {
    setTimeout(() => {
        alert('login bem-sucedido... seja bem-vindo!')
        window.location.href = 'home.html';
    }, 1000);
}else{
    senhaError.textContent = 'Email ou senha inválidos.';
}
});
    function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const nome = nomeInput.value.trim();


});