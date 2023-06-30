// Задание 1
// let str = 'js';
// console.log(str.toUpperCase());
// Задание 2
// const searchStart =(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
// console.log([...new Set(searchStart.map(el => el.toLowerCase()))]);
// Задание 3
// console.log(123.098876.toFixed(2));
// console.log(123.098876.toFixed());
// console.log(123.098876.toFixed(3));
// Задание 4

// const array =[52, 53, 49, 77, 21, 32];
// return array.Math.min().Math.max();
// console.log(array.Math.min());

 
    Array.max = function( array ){
        return Math.max.apply( Math, array );
    };
    
    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };
    let p = [35,2,65,7,8,9,12,121,33,99];
    console.log(`Max value is: ${p.max()}` +
      `\nMin value is: ${p.min()}`);