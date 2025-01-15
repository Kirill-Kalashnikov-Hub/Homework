console.log('Задание 1');
const myArray = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if (myArray[i] === 10) {
    break; // Прерываем цикл, когда встречаем 10
  }
}