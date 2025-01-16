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
