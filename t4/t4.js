'use strict';

const numbers = [5, 2, 8, 1, -69];

function sortArray() {
  const sort = numbers.sort((a, b) => a - b);
  return sort;
}

console.log(numbers);
console.log(sortArray(numbers));
