let number = +prompt('Введите число');
  numberNew = Math.floor(number/2);
let arr = [];
let i = 0;

  while (i < numberNew) {
    arr.push(Math.random()*number);
    i++;
  }
console.log(arr);