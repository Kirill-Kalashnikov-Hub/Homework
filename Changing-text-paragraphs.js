const descriptionParagraphs = document.querySelectorAll('.description');

descriptionParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Новый текст';
});