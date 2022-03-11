const submitButton = document.querySelector('#submit');
const delButton = document.querySelector('#del-button');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textArea = document.querySelector('#my-text');
const options = document.querySelectorAll('.option');

function preventDefault(event) {
    event.target.preventDefault();
}
submitButton.addEventListener('click', preventDefault);

function deleteData() {
    nameInput.value = '';
    emailInput.value = '';
    textArea.value = '';
}
delButton.addEventListener('click', deleteData);
