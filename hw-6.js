// Задание 1
// const array = [1, 5, 4, 10, 0, 3];
// for (let item of array) {
//     if (item===10) {
//         break
//     }
// 	console.log(item);
// }
// Задание 2
// const array = [1, 5, 4, 10, 0, 3];
// console.log(array.indexOf(4))
// Задание 3
// const array = [1, 3, 5, 10, 20];
// console.log(array.join(' '));
// Задание 4 
// let array = [];
// for (let i = 0; i < 3; i++)
// {
//     array[i] = [];
//     for (let j = 0; j <3; j++)
//     {
//         array[i][j] = 1;
//     }
// }
// console.log(array)
// console.log(array);
// Задание 5
// const array = [1,1,1];
// array.push(2,2,2);
// console.log(array);
// Задание 6
// const array = [9, 8, 7, 'a', 6, 5];
// array.sort().pop();
// console.log(array);
// Задание 7
// const array = [9,8,7,6,5];
// let number = +prompt('Угадай');
// for (let item of array) {
//     if (item===number) {
//       alert('Угадал');
//     }
// }
// Задание 8 
// let array = 'abcdef';
// let newArray = array.split('').reverse().join('');
// console.log(newArray);
// Задание 9
// const array = [[1,2,3,],[4,5,6,]];
// const flat = array.flat(Infinity);
// console.log(flat);
// Задание 10
// const random = [6,6,9,2]
// for (let x = 0; x<random.length-1; x++) {
//     let sum = random[x]+ (random[x+1]);
//     console.log(sum);
// }
// Задание 11
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// const squares = nums.map(function (num) {
//   return num * num
// })
//
// console.log(squares)
// Задание 12
// const lengthSrt = (array) => array.map (el => el.length); 
// console.log(lengthSrt(['день', '', 'на', 'Прекрасно прогулялись сегодня', 'и']));
// Задание 13 
// const filterPositive = (array) => array.filter(el => el < 0);
// console.log(filterPositive([-12,10,5,-6,56]));