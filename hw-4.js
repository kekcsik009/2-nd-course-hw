// Задание 1
// let i = 1;
// let n = 2;
// while (i <= n) {
//     console.log ('Привет')
//     i++; 
// }
// Задание 2
// let number = 1;
// while (number !==6) {
//     console.log (number)
//     number++;
// }
// Задание 3
// let number = 7;
// while (number !==23) {
//     console.log (number)
//     number++;
// }
// Задание 4 
// const obj = { 
// 	Kolya: 200,
// 	Vasya: 300,
// 	Petya: 400,
// };
// for (key in obj) { // перебираем объект
// 	if (obj[key]) { // если свойство не пустое
//         console.log('${Kolya}, зарплата ${obj[Kolya]}');
// 	}
// }
// Задание 5
// let n = 1000;
// let num= 0;
// while (n > 50) {
//     n/=2;
//     num++;
// }
// console.log (n);
// console.log (num);
// Задание 6
// const mouth = {
// "Январь":31,   
// }
// let paytnica = 0;
// let friday = 1; 
// for (let newM in mouth) {
//     for (;friday <= mouth[newM]; paytnica++) {
//         friday+=7;
//         console.log(`Нужно готовить отчет`)
//     }
//     friday = friday - mouth[newM];
//     console.log(`месяц - ${newM}, кол-во дней: ${mouth[newM]}, пятница: ${paytnica}`)
// }