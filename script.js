const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const xNumberEl = document.querySelector('.stat__number--x');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
    //example of input validation
    if (textareaEl.value.includes('<script>')) {
        alert('You cannot use <script> in your text.');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }
    //determine new numbers
    let numberOfWords = textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }
    const numberOfCharacters= textareaEl.value.length;
    const xCharactersLeft = 280 - numberOfCharacters;
    const facebookCharacterLeft = 2200 - numberOfCharacters;

    //add visual indicator if limit is exceeded
    if (xCharactersLeft < 0) {
        xNumberEl.classList.add('stat__number--limit')
    }
    if (facebookCharacterLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit')
    }

    //set new number
    wordsNumberEl.textContent = numberOfWords;
    charactersNumberEl.textContent = numberOfCharacters;
    xNumberEl.textContent = xCharactersLeft;
    facebookNumberEl.textContent = facebookCharacterLeft;
};

textareaEl.addEventListener('input', inputHandler);

    
