// console.log('Задание 1');
// const myArray = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
//   if (myArray[i] === 10) {
//     break; // Прерываем цикл, когда встречаем 10
//   }
// }

// console.log('Задание 2');
// const myArray = [1, 5, 4, 10, 0, 3];
// const indexValue  = 4;
// const index = myArray.findIndex(element => element === indexValue);

// if (index !== -1) {
//   console.log(`Индекс значения ${indexValue} в массиве: ${index}`);
// } else {
//   console.log(`Значение ${indexValue} не найдено в массиве`);
// }

// console.log('Задание 3');
// const myArray = [1, 3, 5, 10, 20];
// const result = myArray.join(' ');
// console.log(result);

// console.log('Задание 4');
// const rows = 3;
// const cols = 3;
// const multiArray = [];

// for (let i = 0; i < rows; i++) {
//   const row = [];
//   for (let j = 0; j < cols; j++) {
//     row.push(1);
//   }
//   multiArray.push(row);
// }
// console.log(multiArray);

// console.log('Задание 5');
// const myArray = [1, 1, 1];
// myArray.push(2, 2, 2);
// console.log(myArray);

// console.log('Задание 6');
// let myArray = [9, 8, 7, 'a', 6, 5];
// myArray.sort();
// const indexA = myArray.indexOf('a');
// if (indexA !== -1) {
//   myArray.splice(indexA, 1);
// }
// console.log(myArray);

// console.log('Задание 7');
// const myArray = [9, 8, 7, 6, 5];
// const userGuess = prompt("Угадайте число из массива [9, 8, 7, 6, 5]");

// if (userGuess === null) {
//     alert("Игра отменена");
// } else {
//     const userNumber = parseInt(userGuess);

//     if (isNaN(userNumber)) {
//         alert("Введите пожалуйста число");
//     } else {

//          if (myArray.includes(userNumber)) {
//            alert("Угадал");
//          } else {
//             alert("Не угадал");
//           }
//     }
// }

// console.log('Задание 8');
// const str = 'abcdef';
// const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);

// console.log('Задание 9');
// const multiArray = [[1, 2, 3], [4, 5, 6]];
// const flattenedArray = multiArray.reduce((accumulator, currentArray) => {
//   return accumulator.concat(currentArray);
// }, []);
// console.log(flattenedArray);

// console.log('Задание 10');
// const myArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
// for (let i = 0; i < myArray.length - 1; i++) {
//   const currentElement = myArray[i];
//   const nextElement = myArray[i + 1];
//   const sum = currentElement + nextElement;

//   console.log(`Сумма элементов ${currentElement} и ${nextElement} = ${sum}`);
// }

// console.log('Задание 11');
// function squareArray(arr) {
//     if (!Array.isArray(arr)) {
//       return "Ошибка: на вход должен быть передан массив";
//     }
    
//     const squaredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//        if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
//           return "Ошибка: массив должен содержать только целые числа"
//        }
//       squaredArr.push(arr[i] * arr[i]);
//     }
//     return squaredArr;
//   }
  
//   // Примеры массивов:
//   const numbers = [1, 2, 3, 4, 5];
//   const squaredNumbers = squareArray(numbers);
//   console.log(squaredNumbers);
  
//   const notInteger = [1, 2, 3, 4.8, 5];
//   const incorrectArray = squareArray(notInteger);
//   console.log(incorrectArray); 
  
//   const notArray = "Не массив";
//   const incorrectInput = squareArray(notArray);
//   console.log(incorrectInput); 

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
  const incorrectArray = getWordLengths(notStrings);
  console.log(incorrectArray);
  
  const notArray = "не массив";
  const incorrectInput = getWordLengths(notArray);
  console.log(incorrectInput);
