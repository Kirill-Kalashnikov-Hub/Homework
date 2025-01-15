// console.log('Задание 1.');

// function findMin(a, b) {
//     if (a < b) {
//         return a;      
//     } else {
//         return b;
//     }
// }
// console.log(findMin(8, 4));
// console.log(findMin(6, 6));



// console.log('Задание 2.');

// function matchingNumber(number) {
//     return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
// }
// console.log(matchingNumber(4));
// console.log(matchingNumber(7));
// console.log(matchingNumber(10));
// console.log(matchingNumber(-2));
// console.log(matchingNumber(8.5));



// console.log('Задание 3.');

// function squareNumber(number) {
//     const square = number * number;
//     console.log(`Квадрат числа ${number} равен ${square}`);
// }
// squareNumber(5);
// squareNumber(10);
// squareNumber(100);
// squareNumber(-50);



// console.log('Задание 4.');

// function usersAge() {
//     const age = prompt('Сколько вам лет?');
//     if (isNaN(age)) {
//         console.log('Вы ввели некорректное значение.');
//       } else if (age < 0) {
//           console.log('Вы ввели неправильное значение');
//       } else if (age >= 0 && age <= 12) {
//         console.log('Привет, друг!');
//       } else {
//         console.log('Добро пожаловать!');
//       }
// }
// usersAge();



// console.log('Задание 5.');

// function multiplyNumbers(num1, num2) {
//     const parsedNum1 = parseFloat(num1);
//     const parsedNum2 = parseFloat(num2);

//     if (isNaN(parsedNum1) || isNaN(parsedNum2)){
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return parsedNum1 * parsedNum2;
//     }
// }

// console.log(multiplyNumbers(5, 10));
// console.log(multiplyNumbers('3', 17));
// console.log(multiplyNumbers(25, '11'));
// console.log(multiplyNumbers('text', 43));
// console.log(multiplyNumbers(-4, 33));
// console.log(multiplyNumbers('Друзья', 'Привет'));



// console.log('Задание 6.');

// function getNumber() {
//     let number = prompt('Введите число');
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${number} в кубу равняется ${number ** 3}`;
//     }
// }

// console.log(getNumber());



// console.log('Задание 7.');

// function getArea() {
//     return Math.PI * this.radius ** 2;
// }

// function getPerimeter() {
//     return Math.PI * this.radius ** 2;
// }

// const circle1 = {
//     radius: 10,
//     methodGetArea: getArea,
//     methodGetPerimeter: getPerimeter,
// }

// const circle2 = {
//     radius: 20,
//     methodGetArea: getArea,
//     methodGetPerimeter: getPerimeter,
// }

// console.log(circle1.methodGetArea());
// console.log(circle1.methodGetPerimeter());
// console.log(circle2.methodGetArea());
// console.log(circle2.methodGetPerimeter());




