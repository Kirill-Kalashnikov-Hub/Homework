function reverseTextGame() {
    const inputText = prompt("Введите текст, который хотите перевернуть:");
  
    if (inputText === null) {
        alert("Игра отменена!");
        return;
    }
  
    if (inputText === "") {
        alert("Пожалуйста, введите текст.");
          reverseTextGame();
          return;
    }
  
    const reversedText = inputText.split('').reverse().join('');
    alert("Перевернутый текст: " + reversedText);
  }
