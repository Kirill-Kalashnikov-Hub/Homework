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


console.log('Задание 7');
function getRandomNumberInRange(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
      return "Ошибка: оба аргумента должны быть целыми числами";
  }

  if (min > max) {
      return "Ошибка: минимальное значение должно быть меньше или равно максимальному";
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Примеры использования:
console.log(getRandomNumberInRange(5, 10)); 
console.log(getRandomNumberInRange(1, 100)); 
console.log(getRandomNumberInRange(-10, 0)); 

console.log(getRandomNumberInRange(10, 5)); 
console.log(getRandomNumberInRange(1.5, 5)); 
console.log(getRandomNumberInRange(1, 5.5)); 
console.log(getRandomNumberInRange(1, "5"));


console.log('Задание 8');
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
console.log("Текущая дата (год-месяц-день):", formattedDate);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const localizedDate = currentDate.toLocaleDateString('ru-RU', options); 
console.log("Текущая дата (словесный формат, рус):", localizedDate);


console.log('Задание 9');
const presentDate = new Date();


const futureDate = new Date(presentDate); 
futureDate.setDate(presentDate.getDate() + 73);


const theYear = futureDate.getFullYear();
const theMonth = String(futureDate.getMonth() + 1).padStart(2, '0'); 
const theDay = String(futureDate.getDate()).padStart(2, '0');

const formattedFutureDate = `${theYear}-${theMonth}-${theDay}`;

console.log("Текущая дата:", presentDate);
console.log("Дата через 73 дня:", formattedFutureDate);