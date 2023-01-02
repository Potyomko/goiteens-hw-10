const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', lenght);

function lenght(event) {
    if (event.currentTarget.value.length >= Number(inputRef.data-length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };
};