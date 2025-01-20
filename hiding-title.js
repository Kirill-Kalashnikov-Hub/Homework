const header = document.querySelector('#hiding-title');
const toggleBtn = document.querySelector('#toggleBtn');
let isHidden = false;

toggleBtn.addEventListener('click', () => {
    isHidden = !isHidden;
    header.style.opacity = isHidden ? '0' : '1';
    toggleBtn.textContent = isHidden ? 'Показать' : 'Скрыть';
});