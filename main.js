//Задание 1.

let a = prompt('Введите число:');
let answer = +a;

if (typeof answer === 'number' && !isNaN(answer)) {
    if (answer == 0) {
      console.log('Ноль');
    } else if (answer % 2 === 0) {
      console.log('Четное число');
    } else {
      console.log('Нечетное число');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}

//Задание 2.

let x;
let type = typeof x;

if (type === 'number') {
  console.log('x - это число');
} else if (type === 'string') {
  console.log('x - это строка');
} else if (type === 'boolean') {
  console.log('x - это логический тип');
} else {
  console.log('Тип x не определен');
}

//Задание 3.

let str = 'Hello';
let strReverse = str.split('').reverse().join('');
console.log(strReverse);

//Задание 4.

let num = Math.floor(Math.random() * 101);
console.log(num);

//Задание 5.

const arr = [1, 5, 'string', 'number', true];
console.log(arr.length);

let newArr = arr.map((item) => item);
console.log(newArr);

//Задание 6.

const array = [1, 1, 3, 3, 4];
let isEqual = true;
for (let i=0; i < array.length - 1; i++) {
  if (array[i] !== array[i+1]) {
    isEqual = false;
  }
}
console.log(isEqual)

//Задание 7.

const arrayTwo = [1, 5, 0, 2, 4, null];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

for (let i = 0; i < arrayTwo.length - 1; i++) {
  if (arrayTwo[i] === 0) {
    countZero += 1;
  } else if (arrayTwo[i] %2 === 0) {
    countEven += 1;
  } else if (arrayTwo[i] %2 !== 0) {
    countOdd += 1;
  }
}
console.log(`В массиве ${countZero} ноль, ${countEven} четных числа и ${countOdd} нечетных числа`);

//Задание 8.

let myMap = new Map();
myMap.set('1', 123);
myMap.set('str', '8910');
myMap.set(true, 456);
myMap.set(8, 1235654);

for (let item of myMap) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);  
}