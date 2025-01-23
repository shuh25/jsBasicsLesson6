// задание 1 
let number  = prompt('Введите любое число (можно отрицательное)');

if (number > 0) {
    console.log("Ваше число положительное");
} else if (number < 0) {
    console.log("Ваше число отрицательное");
} else {
    console.log("Ваше число нуль");
}

// задание 2
const youWeight = prompt('Введите свой вес в кг');
const youHeight = prompt('Введите свой рост в метрах (через точку)');
const bmi = youWeight / Math.pow(youHeight, 2);
console.log('Ваш вес:', youWeight, 'кг');
console.log('Ваш рост:',youHeight,  'м');
console.log("Ваш индекс массы тела:", bmi) ;


if (bmi < 18.5) {
    result = 'У Вас дефицит массы тела - кушайте побольше'
} else if (bmi < 24.9) {
    result = 'У Вас нормальная масса тела - молодец'
} else if (bmi < 29.9) {
    result = 'У Вас увеличение массы тела - занимайтесь спортом'
} else if (bmi < 34.9) {
    result = 'У Вас ожирение 1 степени - обратитесь к диетологу'
} else if (bmi < 39.9) {
    result = 'У Вас ожирение 2 степени - бегите к врачу!'
} else {
    result = 'У Вас ожирение 3 степени - хорош уже жрать!!!'
} 
     
console.log(result);

// Задание 3 

let month = prompt("Введите любое число от 1 до 12");
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;        
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;       
    case 6:
        monthName = 'Июнь';
        break;        
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Такого месяца нет';
}

console.log(monthName);
