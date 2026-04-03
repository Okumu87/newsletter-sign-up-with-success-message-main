
const emailInput = document.querySelector('.email');
const main = document.querySelector('main');
const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    if(!emailValue || !emailValue.includes('@') || !emailValue.includes('com') && !emailValue.includes('nl') && !emailValue.includes('org') && !emailValue.includes('net')){
        errorMessage.classList.remove('hidden');
        emailInput.style.backgroundColor = 'var(--secondary-red)';
        emailInput.style.borderColor = 'var(--primary-red)';
        return;
    }
    successMessage.querySelector('.email').textContent = emailValue;
    main.hidden = true;
    successMessage.classList.remove('hidden');
})

const dismissBtn = document.getElementById('dismissBtn');
dismissBtn.addEventListener('click', () => {
    main.hidden = false;
    successMessage.classList.add('hidden');
    form.reset();
})  