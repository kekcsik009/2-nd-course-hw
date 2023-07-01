// Первая игра
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

// Вторая игра
const array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function words(array) {
    return array.sort(()=> Math.random() - 0.5);
    
}

function playWords() {
    const arrWords = words([...array]);
    alert(`Перемешанный массив: ${arrWords.join(', ')} `);


const firstElArr = prompt('Чему равнялся первый элемент массива?');
const lastElArr = prompt('Чему равнялся последний элемент массива?');

let correctCount = 0;

if (firstElArr=== arrWords[0]) correctCount++;
if (lastElArr === arrWords[arrWords.length - 1]) correctCount++;

switch (correctCount) {
    case 2: 
    alert('Поздравляю вы угадали оба элемента.');
    break;
    
    case 1: 
    alert('Вы были близки к победе!');
    break;
    default: 
    alert('Вы не угадали ни одного элемента!');
}
}