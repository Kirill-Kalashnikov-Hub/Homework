
function generateProblem() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;

  if (operator === '/' && num2 === 0) {
    num2 = 1;
  }

  let problem = `${num1} ${operator} ${num2} = ?`;

  if (operator === '+') {
    correctAnswer = num1 + num2;
  } else if (operator === '-') {
    correctAnswer = num1 - num2;
  } else if (operator === '*') {
    correctAnswer = num1 * num2;
  } else if (operator === '/') {
    correctAnswer = parseFloat((num1 / num2).toFixed(2));
  }

  return { problem, correctAnswer };
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === null) {
      gameActive = false;
      return "Game cancelled";
    }

    if(isNaN(userAnswer)) return ;
    if (parseFloat(userAnswer) === correctAnswer) {
       return 'Верно!';
    } else {
       return `Не верно! Правильный ответ: ${correctAnswer}.`;
    }
}

function playMathGame() {
    const { problem, correctAnswer } = generateProblem();
    const userAnswer = prompt(problem);
    const result = checkAnswer(userAnswer, correctAnswer);

   if(result === "Game cancelled"){
        alert("Игра отменена!");
    } else {
        alert(result);
        playMathGame();
    }
}
