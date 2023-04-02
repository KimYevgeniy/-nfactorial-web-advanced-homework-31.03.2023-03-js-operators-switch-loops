// Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли. 
let user = {
    name: prompt('What is your name?', ''),
    age: +prompt('How old are you?', ''),
    gender: prompt('What is your gender?', '')
}
console.log(user);
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert.
let b = +prompt('Enter 10', '');
if (b === 10) {
    alert('You entered ' + b);
} else {
    alert("You didn't enter " + 10);
}
// Перепишите этот блок кода с использованием оператора switch.
const a = +prompt('Enter number from 0 to 3', '');;
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert(`${a} is not in range of 0-3`);
}

// Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let sumOfEven = 0;
let counter = 0;
for (let i = 2; i <= 100; i += 2) {
    sumOfEven += i;
  }
console.log("1-100 even nums sum = " + sumOfEven);
// Перепишите цикл for на while.
sumOfEven = 0;
counter = 0;
while (counter <=100) {
    sumOfEven += counter;
    counter += 2;
}
console.log(sumOfEven);
