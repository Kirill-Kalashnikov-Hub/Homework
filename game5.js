function playGame() {
    const choices = ["камень", "ножницы", "бумага"];
  
    // Получаем выбор пользователя с проверкой на корректность
    let userChoice;
    do {
      userChoice = prompt("Выберите камень, ножницы или бумагу:");
      if (userChoice === null) {
        alert("Игра отменена!");
        return;
      }
  
      userChoice = userChoice.toLowerCase();
  
      if (!choices.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
      }
    } while (!choices.includes(userChoice));
  
  
    // Генерируем случайный выбор компьютера
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Определяем победителя
    let result;
    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы выиграли!";
    } else {
      result = "Компьютер выиграл!";
    }
  
    // Выводим результат в alert
    alert(
      `Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`
    );
  }

  
  

  