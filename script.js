
const emailInput = document.querySelector('.email');
const main = document.querySelector('main');
const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        successMessage.querySelector('.email').textContent = email;
        successMessage.classList.remove('hidden');
        main.style.display = 'none';
        form.reset();
        emailInput.style.borderColor = '';
        document.querySelector('.error-message').classList.add('hidden');
       
    } else {
        emailInput.style.borderColor = 'red';
        emailInput.style.backgroundColor = '#ffe6e6';
        document.querySelector('.error-message').classList.remove('hidden');
    }

     
});

