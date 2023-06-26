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