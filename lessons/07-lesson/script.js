"use strict";
// console.log(test1);
// console.log(test2);

// var test1 = 'var test 1';
// let test2 = 'let test 2';
// const test3 = 'const test 3';

// console.log(test1);
// console.log(test2);
// console.log(test3);

// test1 = 'error'
// test2 = 'error'
// test3 = 'error'

// console.log(test1);
// console.log(test2);
// console.log(test3);

const string = 'Строка'; // Строка
const number = 123; // Число
const boolean = true; // true / false (boolean)
const array = ['dwadaw', 'dawdaw', 'dwadawd', 23432, 23232, true, false, true, {}, {}] // Массив
const object = {
  key: 'value',
  firstname: 'My name',
  child: {
    lastname: 'My lastname',
    ages: [16, 17, 19]
  }
}; // Объект

const user = {
  firstname: 'Name',
  age: null,
};

// console.log(typeof string);
// console.log(typeof number);
// console.log(typeof boolean);
// console.log(typeof array, Array.isArray(array));
// console.log(typeof object);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NaN);
// const key = 'child';
// console.log(object.child.ages[0]);
// console.log(object[key]['ages'][0]);

// console.log(user.lastname);

// delete user.firstname
// user.lastname = 'ERROR'

// console.log(user);


function calculate(a, b) {
  const sum = +a + +b;

  if (!a || !b) return 'ERROR: Необходимо передать данные в функцию'
  if (isNaN(+sum)) return 'ERROR: Необходимо передать числа'

  return sum
};


const myFunc = () => {

};

(async () => { })()


console.log(calculate(5, 5))
console.log(calculate(5, '5'))
console.log(calculate(5, {}))
console.log(calculate(5))

// const
//   ts1 = 1,
//   ts2 = 2,
//   ts3 = 3,
//   ts4 = 4;

// console.log(ts3);

// console.log(5 + '5' + 'dwadawd');
