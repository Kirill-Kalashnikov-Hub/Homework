const addElementBtn = document.querySelector('#addElementBtn');

addElementBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});