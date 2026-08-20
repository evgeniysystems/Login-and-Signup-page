document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

const container = document.getElementById('auth-container');
const btnGoToRegister = document.getElementById('go-to-register');
const btnGoToLogin = document.getElementById('go-to-login');

btnGoToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('right-panel-active');
});

btnGoToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('right-panel-active');
});

const eyeButtons = document.querySelectorAll('.btn-eye');

eyeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        
        if (input.type === 'password') {
            input.type = 'text';
            button.classList.add('crossed'); 
        } else {
            input.type = 'password';
            button.classList.remove('crossed'); 
        }
    });
});