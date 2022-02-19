const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDefault(event) {
    if(event.key !== 'a') {
        event.preventDefault();
    }
}
HREF_LINK.addEventListener('click', preventDefault);
INPUT_CHECKBOX.addEventListener('click', preventDefault);

function preventDefaultExceptsA(event) {
    if(event.key !== 'a') {
        event.preventDefault();
    }
}
INPUT_TEXT.addEventListener('keypress', preventDefaultExceptsA);