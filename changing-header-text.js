const mainHeader = document.querySelector('#changeHeader');
const changeTextBtn = document.querySelector('#changeTextBtn');

changeTextBtn.addEventListener('click', () => {
    mainHeader.textContent = 'Привет, мир!';
});