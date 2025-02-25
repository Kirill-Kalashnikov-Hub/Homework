console.log('Задание 1');
const myArray = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if (myArray[i] === 10) {
    break; // Прерываем цикл, когда встречаем 10
  }
}

console.log('Задание 2');
const indexArray = [1, 5, 4, 10, 0, 3];
const indexValue  = 4;
const index = indexArray.findIndex(element => element === indexValue);

if (index !== -1) {
  console.log(`Индекс значения ${indexValue} в массиве: ${index}`);
} else {
  console.log(`Значение ${indexValue} не найдено в массиве`);
}

console.log('Задание 3');
const numberArray = [1, 3, 5, 10, 20];
const result = numberArray.join(' ');
console.log(result);

console.log('Задание 4');
const rows = 3;
const cols = 3;
const multiArray = [];

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push(1);
  }
  multiArray.push(row);
}
console.log(multiArray);

console.log('Задание 5');
const meaningfulArray = [1, 1, 1];
meaningfulArray.push(2, 2, 2);
console.log(meaningfulArray);

console.log('Задание 6');
let sortingArray = [9, 8, 7, 'a', 6, 5];
sortingArray.pop();
const indexA = sortingArray.indexOf('a');
if (indexA !== -1) {
    sortingArray.splice(indexA, 1);
}
console.log(sortingArray);

console.log('Задание 7');
const riddleArray = [9, 8, 7, 6, 5];
const userGuess = prompt("Угадайте число из массива [9, 8, 7, 6, 5]");

if (userGuess === null) {
    alert("Игра отменена");
} else {
    const userNumber = parseInt(userGuess);

    if (isNaN(userNumber)) {
        alert("Введите пожалуйста число");
    } else {

         if (riddleArray.includes(userNumber)) {
           alert("Угадал");
         } else {
            alert("Не угадал");
          }
    }
}

console.log('Задание 8');
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

console.log('Задание 9');
const multitransformArray = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = multitransformArray.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);
console.log(flattenedArray);

console.log('Задание 10');
const arbitraryArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
for (let i = 0; i < arbitraryArray.length - 1; i++) {
  const currentElement = arbitraryArray[i];
  const nextElement = arbitraryArray[i + 1];
  const sum = currentElement + nextElement;

  console.log(`Сумма элементов ${currentElement} и ${nextElement} = ${sum}`);
}

console.log('Задание 11');
function squareArray(arr) {
    if (!Array.isArray(arr)) {
      return "Ошибка: на вход должен быть передан массив";
    }
    
    const squaredArr = [];
    for (let i = 0; i < arr.length; i++) {
       if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
          return "Ошибка: массив должен содержать только целые числа"
       }
      squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
  }
  
  // Примеры массивов:
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareArray(numbers);
  console.log(squaredNumbers);
  
  const notInteger = [1, 2, 3, 4.8, 5];
  const incorrectArray = squareArray(notInteger);
  console.log(incorrectArray); 
  
  const notArray = "Не массив";
  const incorrectInput = squareArray(notArray);
  console.log(incorrectInput); 

  console.log('Задание 12');

  function getWordLengths(arr) {
    if (!Array.isArray(arr)) {
      return "Ошибка: на вход должен быть передан массив";
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') {
        return "Ошибка: массив должен содержать только строки";
      }
    }
  
    return arr.map(str => str.length);
  }
  
  // Примеры массивов :
  const words = ['собака', 'ель', 'органайзер', 'пурпурный'];
  const lengths = getWordLengths(words);
  console.log(lengths); 
  
  const notStrings = ['кошка', 7, 'птица', 'кислый'];
  const incorArray = getWordLengths(notStrings);
  console.log(incorrectArray);
  
  const noArray = "не массив";
  const incorrectsInput = getWordLengths(notArray);
  console.log(incorrectInput);

  console.log('Задание 13');
  function getNegativeNumbers(arr) {
    if (!Array.isArray(arr)) {
      return "Ошибка: на вход должен быть передан массив";
    }
  
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
            return "Ошибка: массив должен содержать только целые числа";
        }
    }
  
    return arr.filter(number => number < 0);
  }
  
  // Примеры использования:
  const numbers1 = [1, -7, 3, -20, 13, -10, 6];
  const negativeNumbers1 = getNegativeNumbers(numbers1);
  console.log(negativeNumbers1);
  
  const numbers2 = [1, 2, 3, 4, 5];
  const negativeNumbers2 = getNegativeNumbers(numbers2);
  console.log(negativeNumbers2);
  
  const numbers3 = [-1, -2, -3, -4, -5];
  const negativeNumbers3 = getNegativeNumbers(numbers3);
  console.log(negativeNumbers3);
  
  const notIntegers = [1.10, 2, 3, 4, 5];
  const notcorrectArray = getNegativeNumbers(notIntegers);
  console.log(incorrectArray); 

  const dontArray = "не массив";
  const notcorrectInput = getNegativeNumbers(notArray);
  console.log(incorrectInput);

  console.log('Задание 14');
  const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

  const evenNumbers = originalArray.filter(number => number % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Четные числа:", evenNumbers);

console.log('Задание 15');
const arithmeticArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = arithmeticArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum / arithmeticArray.length;

console.log("Сгенерированный массив:", arithmeticArray);
console.log("Среднее арифметическое:", average);