const removeElementBtn = document.querySelector('#removeElementBtn');

removeElementBtn.addEventListener('click', () => {
    const firstDescriptionParagraph = document.querySelector('.descript');
    if (firstDescriptionParagraph) {
        firstDescriptionParagraph.remove();
    }
});