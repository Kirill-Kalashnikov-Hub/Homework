const textParagraph = document.querySelector('#colorParagraph');
const changeColorBtn = document.querySelector('#changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    textParagraph.style.color = 'red';
});