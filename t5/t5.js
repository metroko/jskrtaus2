'use strict';

const numbers = [5, 2, 8, 1, -69];

function sortArray(numbers, order) {
  if (order === 'asc') {
    numbers.sort((a, b) => a - b);
    return numbers;
  } else if (order === 'desc') {
    numbers.sort((a, b) => b - a);
    return numbers;
  }
}

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
