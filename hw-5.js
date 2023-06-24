// Теория
// function calc(a, b) {
//     let sum = a + b;
//     let mult = a * b;
//     console.log(`Сумма параметров равна ${sum}
//     Произведение равно ${mult}`);
// }
// calc (4, 5);
// calc (10, 12);
// function riddles(question, answer) {
//     let userAnswer = prompt(question);
//     if (userAnswer === answer) {
//         console.log('угадал');
//     }    else {
//         console.log('не угадал');
//     }
// }
// riddle('Сидит дед во сто шуб одет кто его раздевает тот слез проливает', 'лук');
// riddle('Зимой и летом одним цветом', 'елка');
// function sum(prepaid, salary) {
//     return prepaid+salary;
// }
// function mult(day, moneyDay) {
//     return day*moneyDay;
// }

// let month1 = sum(30, 40);
// let month2 = sum(40, 55);

// let result = month1+month2;
// let result2 = mult (45, 3.4);
// console.log (`Всего заработал ${result}`)
// console.log (`Зарплата по дням ${result2}`)
// ///////////////////////////////////////////////////////////////////////////
// Задание 1 
// function number(a, b) {
//     if (a >= b) {
//         console.log(b);
//     }    else {
//         console.log(a);
//     }
// }
// number(4, 6);
// number(6, 6);
// number(6, 8);
// Задание 2
// function odd(a) {
//     if (a %2== 0) {
//         console.log(`четное число ${a}`);
//     }    else {
//         console.log(`нечетное число ${a}`);
//     }    
// }
// odd (4);
// odd (5);
// Задание 3
////3.1
// function quadro(a) {
//     console.log(a**2); 
// }
// quadro(4)
////3.2
// function quadro(a) {
//     let b = a**2;
//     console.log (b);
//     return b;  
// }
// quadro(2)
// Задание 4
// "use strict";

// let age = prompt("Сколько Вам лет?");

// let printMessage;

// if (age == 0 || age <=12 && age >0) {

//     printMessage = function () {
//         console.log("Привет, друг!");
//     }

// } else if (age >= 13) {

//     printMessage = function () {
//         console.log("Добро пожаловать");
//     }
// } else if (age <0) {

//     printMessage = function () {
//         console.log("Вы ввели неправильное значение");
//     }
// } 
// printMessage();
// Задание 5
// function check(first,second) {
//   if (isNaN(first) || isNaN(second)) {
//     return console.log('Одно или оба значения не являются числом');
//   }  
//   else {
//     let mult = first* second;
//     console.log(`Введенные вами значения являются числами их произведение: - ${mult}`);
//     return mult;
//   }
// }
// check (2,5)
// check (2,'daasd')
// Задание 6
// let cube = (number) => {
//     if (isNaN(number)===false){
//         let result = number**3;
//         return(`${number} в кубе равнается ${result}`)
//     } else {
//         return('Переданный параметр не является числом')
//     }  
// }
// console.log(cube(0));
// console.log(cube(1));
// console.log(cube(2));
// console.log(cube(3));
// console.log(cube(4));
// console.log(cube(5));
// console.log(cube(6));
// console.log(cube(7));
// console.log(cube(8));
// console.log(cube(9));
// console.log(cube(10));
// console.log(cube('dwdw'));
// Задание 7 
// const circle1 = {
//     radius: 5,
//     getArea() {
//       return Math.PI * radius ** 2;
//     },
//     getPerimeter() {
//       return 2 * Math.PI * radius;
//     }
//   };
  
//   const circle2 = {
//     radius: 10,
//     getArea() {
//       return Math.PI * radius ** 2;
//     },
//     getPerimeter() {
//       return 2 * Math.PI * radius;
//     }
//   };
// Задание 8
function season(monthNumber) {
    if (!isNaN(monthNumber) && monthNumber >=0 && monthNumber <=12)  {
        if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
            return  console.log('Winter');
        }  else if (monthNumber>= 3 && monthNumber <= 5){
            return console.log('Spring');
        }  else if (monthNumber>= 6 && monthNumber <= 8){
            return console.log('Summer');
        }  else  {
            return  console.log('Аutumn');
        } 
    } else {
        return console.log('Такого месяца не существует');
    }
}

