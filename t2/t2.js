'use strict';

let numbers = [];

function sort(a, b) {
  const sort = a - b;
  return sort;
}

for (let i = 1; i <= 5; i++) {
  let number = +prompt(`Enter Number ${i}:`);
  numbers.push(number);
}

console.log('Numbers:', numbers);

let search = +prompt('Enter a Number to Search:');

if (numbers.includes(search)) {
  console.log(`Number ${search} is found in the array.`);
} else {
  console.log(`Number ${search} is not found in the array.`);
}

numbers.pop();
console.log('Updated Numbers:', numbers);

numbers.sort(sort);

console.log('Sorted Numbers:', numbers);
