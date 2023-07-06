// //teoria
// const fibonacci = [1, 1, 2, 3, 5, 8];

// // TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// // Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
// const multipleByTwoFib = fibonacci.map((number) => number*2)
// // Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
// const plusTenFib = fibonacci.map((number) => number+10)
// // Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
// const onlyBigFib = fibonacci.filter((number) => number>3)

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

// Эта функция работает с колбэком
// Она пока не делает ничего полезного, просто вызывает переданный в нее колбэк
// В параметрах функции есть callback, его название может быть любым
// function functionWithCallback(callback) {
//     // Вызов колбэка
//     callback();
//   }
  
//   // Функция пишет в консоль приветствие
//   function greetWorld() {
//     console.log("Привет, мир с колбэками!");
//   }
  
//   // Вызываем функцию functionWithCallback и передаем в нее аргумент — колбэк-функцию greet
//   functionWithCallback(greetWorld); // => Выведет в консоль "Привет, мир с колбэками!"

// Задание 1  
// const people = [ 
//     { name: 'Глеб', age: 29 }, 
//     { name: 'Анна', age: 17 }, 
//     { name: 'Олег', age: 7 }, 
//     { name: 'Оксана', age: 47 } 
//  ]; 
//  people.sort(function (a, b) { 
//     if (a.age > b.age) { 
//       return 1; 
//     } 
//     if (a.age < b.age) { 
//       return -1; 
//     } 
//     return 0; 
//   }); 
//   return console.log(people) 
        // Задание 2    
// function isPositive(number) { 
//   if (number> 0) { 
//     return number; 
//   } 
//   } 
//   function isMale(gender) { 
//   if (gender.gender === 'male') { 
//     return gender; 
//   } 
//   } 
//   function filter(arr, ruleFunction) { 
//   for (let i = 0; i<arr.length; i++) { 
//     return arr.filter(ruleFunction); 
//   } 
//   } 
   
//   console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9] 
   
//   const people = [ 
//       {name: 'Глеб', gender: 'male'}, 
//       {name: 'Анна', gender: 'female'}, 
//       {name: 'Олег', gender: 'male'}, 
//       {name: 'Оксана', gender: 'female'} 
//   ]; 
   
//   console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}] 
   
        // Задание 3 
// const timer = (deadline) => { 
//   const interval = setInterval(() => { 
//       let currentDate = new Date(); 
//    console.log(currentDate); 
//    }, 3000); 
   
   
//    setTimeout(() => { 
//       clearInterval(interval); 
//       console.log('30 секунд прошло') 
//     }, deadline * 1000) 
//   }; 
   
//   timer(30); 
        // Задание 4  
//   function delayForSecond(cb) { 
//     setTimeout(() => { 
//       console.log('Прошла одна секунда');  
//       if(cb) {  cb();} 
//     }, 1000) 
//  } 
//  delayForSecond(function () { 
//     console.log('Привет, Глеб!'); 
//  }) 
        // Задание 5 
// function delayForSecond(cb) { 
//   setTimeout(() => { 
//       console.log('Прошла одна секунда'); 
//       if(cb) {  cb(); } 
 
//   }, 1000) 
// } 
// // Функция sayHi выводит в консоль приветствие для указанного имени 
// function sayHi (name) { 
//     console.log(`Привет, ${name}!`); 
// } 
 
// // Код выше менять нельзя 
 
// // Нужно изменить код ниже: 
 
// delayForSecond(() => { 
//   sayHi('Глеб'); 
 
// });