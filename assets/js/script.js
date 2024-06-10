function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(emailValue)) {
        alert('Thank you for signing up!');
        emailInput.value = ''; 
    } else {
        errorMessage.style.display = 'block';
    }
}