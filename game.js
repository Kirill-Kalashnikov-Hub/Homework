function startGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    alert('Угадай число');
    while(true) {
        const input = prompt('Попробуй угадать число от 1 до 100:')
        if (input === null) {
            alert('Игра отменена!');
            return;
        }
        guess = parseInt(input);
        if (isNaN(guess)) {
            alert('Пожалуйста введите корректное число!');
            continue;
        }
        if (guess === secretNumber) {
            alert(`Вы угадали число: ${secretNumber}`);
            break;
        }else if (guess < secretNumber) {
            alert('Загаданное число больше!');
        }else{
            alert('Загаданное число меньше!');
        }
    }
}
