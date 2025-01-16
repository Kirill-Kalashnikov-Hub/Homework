console.log('Задание 1');
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);


console.log('Задание 2');
function filterStringsByStart(stringArray, startString) {
  if (!Array.isArray(stringArray)) {
    return "Ошибка: на вход должен быть передан массив";
  }

  if (typeof startString !== 'string') {
    return "Ошибка: второй аргумент должен быть строкой";
  }

  const lowerStartString = startString.toLowerCase();
  return stringArray.filter(str => typeof str === 'string' && str.toLowerCase().startsWith(lowerStartString));
}

// Примеры использования:
const strings1 = ['apple', 'apricot', 'banana', 'avocado'];
const filteredStrings1 = filterStringsByStart(strings1, 'Ap');
console.log(filteredStrings1); 

const strings2 = ['cat', 'dog', 'car', 'cow'];
const filteredStrings2 = filterStringsByStart(strings2, 'c');
console.log(filteredStrings2);

const strings3 = ['hello', 'world', 'hi', 'welcome'];
const filteredStrings3 = filterStringsByStart(strings3, 'W');
console.log(filteredStrings3); 

const strings4 = ['apple', 'banana', 123, 'orange'];
const filteredStrings4 = filterStringsByStart(strings4, 'a');
console.log(filteredStrings4); 

const notArray = "not array";
const incorrectInput = filterStringsByStart(notArray, 'a');
console.log(incorrectInput); 

const notString = ['apple', 'banana', 'orange'];
const incorrectInput2 = filterStringsByStart(notString, 1);
console.log(incorrectInput2);


console.log('Задание 3');
const number = 32.58884;
const roundedDown = Math.floor(number);
console.log("Округление до меньшего целого:", roundedDown);
const roundedUp = Math.ceil(number);
console.log("Округление до большего целого:", roundedUp);
const roundedNearest = Math.round(number);
console.log("Округление до ближайшего целого:", roundedNearest);


console.log('Задание 4');
const numbers = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log("Минимальное значение:", minValue);
console.log("Максимальное значение:", maxValue);


console.log('Задание 5');
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10);
  const result = randomNumber + 1;

  console.log("Случайное число от 1 до 10:", result);
}
getRandomNumber();


console.log('Задание 6');
function generateRandomArray(limit) {
  if (!Number.isInteger(limit) || limit <= 0) {
    return "Ошибка: введите положительное целое число";
  }

  const arrayLength = Math.floor(limit / 2);
  const randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * (limit + 1));
    randomArray.push(randomNumber);
  }

  return randomArray;
}

// Примеры использования:
console.log(generateRandomArray(10));

console.log(generateRandomArray(15));

console.log(generateRandomArray(6));

console.log(generateRandomArray(0));

console.log(generateRandomArray(5.5));

console.log(generateRandomArray(-5));


