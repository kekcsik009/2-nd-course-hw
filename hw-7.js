// Задание 1
// let str = 'js';
// console.log(str.toUpperCase());
// Задание 2
// function getArrString(array, string) {
//     let arr = [];
//     for (el of array) {
//         let element = el.toLowerCase().startsWith(string.toLowerCase());
//         element ? arr.push(el.toLowerCase()) : el;
//     }
//     return arr 
// } 
// console.log(getArrString(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'))
// Задание 3
// console.log(123.098876.toFixed(2));
// console.log(123.098876.toFixed());
// console.log(123.098876.toFixed(3));
// Задание 4
// const myArray = [52, 53, 49, 77, 21, 32];
// let min = Math.min(...myArray);
// let max = Math.max(...myArray);
// console.log(min, max)
// Задание 5
// function random (minValue, maxValue) {
//     return Math.round(Math.random()*maxValue);
// }
// console.log(random(0, 10));
// Задание 6
// let number = +prompt('Введите число');
//   numberNew = Math.floor(number/2);
// let arr = [];
// let i = 0;

//   while (i < numberNew) {
//     arr.push(Math.round(Math.random()*number));
//     i++;
//   }
// console.log(arr);
// Задание 7
// function array(first, second) {
//     return Math.floor(Math.random()*(second-first));
// }
// console.log(array(1,10));
// Задание 8
// let currentDate = new Date();
// console.log(currentDate);
// Задание 9
// let myDate = new Date();
// console.log(+myDate);
// let days73 = 73*24*60*60*1000;
// let searchDate = +myDate+days73;
// let dayAfterWards73 = new Date (searchDate);
// console.log(dayAfterWards73);
// Задание 10
// const date = new Date(2014, 11, 31, 12, 30, 0);
// console.log(date.toTimeString());
//   let time = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
//   };
//   let options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }
//   let weekday = { 
//     weekday: 'long'
//   }
// console.log(date.toLocaleString('ru', options) + ' - ' + 'это ' + date.toLocaleString('ru', weekday));
// console.log(date.toLocaleString('ru', time));









