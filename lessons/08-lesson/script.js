
// const str = 'Строка 3434 которую я ввел 3434'

// console.log(str.split(' ').join(' - '));


// const tr = true;

// let userName = 'Ivan'
// let userName2 = userName;

// const user = {
//   firstname: 'Alex',
//   lastName: 'Black',
// }

// const user2 = {
//   lastName: 'dawdaw',
//   ...user,
// };

// userName = 'TEST'
// user2.firstname = 'TEST'

// console.log(user2 === user);


// console.log('userName:', userName);
// console.log('user:', user);

// console.log('userName2:', userName2);
// console.log('user2:', user2);



// const user1 = {
//   firstName: 'Alex',
//   address: {
//     city: 'Almaty'
//   }
// }

// const user2 = {
//   ...user1,
//   address: { ...user1.address }
// }

// user2.address.city = 'Astana'
// user2.address.country = 'Kazakhstan'

// console.log(user1);
// console.log(user2);

// console.log(2 != 2);


// if (1 < 0) {
//   console.log("Условие сработало");
// } else if (5 > 0) {
//   console.log("Второе условие сработало");
// } else {
//   console.log('Условие не сработало');
// }

// console.log(
//   1 < 0 ? 'Условие сработало' : 5 > 0 ? 'Второе условие сработало' : 'Условие не сработало'
// );

// if (1 < 0) {
//   console.log("Условие сработало");
// }

// console.log(1 > 0 && "Условие сработало");


const fruits = [
  'Banana', 'Apple', 'Orange'
];

// const AppleIndex = fruits.findIndex((fruit) => fruit === 'Apple')

// console.log(AppleIndex);

// console.log(fruits[AppleIndex]);

// console.log(fruits);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.toSorted());
fruits.push('Tomato')
fruits.unshift('Cucumber')
// console.log(fruits);

const dates = [65, 1, 16, 6, 101, 26, 9, 11]

// console.log(dates.sort((a, b) => a - b));

// console.log(dates.reduce((a, b) => a + b, 0));

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log('for:', fruits[i]);
}

for (const fruitIndex in fruits) {
  console.log('for in:', fruits[fruitIndex]);
}

for (const fruit of fruits) {
  console.log('for of:', fruit);
}

let wIndex = 0;
while (wIndex < fruits.length) {
  console.log('while:', fruits[wIndex]);
  wIndex++
}

fruits.forEach((fruit) => {
  console.log('forEach:', fruit);
})

const str1 = '123';
const str2 = "123\n\n" + fruits[2] + '\n' + fruits[3] + "\n\n3246346";
const str3 = `123

${fruits[2]}
${fruits[3]}

3246346
`;

// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(`${str2} ${str3}`);
console.clear();

// alert('Привет!');
// console.log(confirm('Согласен?'));
// console.log(prompt('Привет как дела?'));