'use strict';

const numbers = [];
let number = "";
const even = [];

do {
  number = prompt('Enter a number (or "done" to finish):');
  numbers.push(number);
} while (number != "done");

for (number of numbers) {
  if (number % 2 === 0)
    even.push(number);
}

if (even.length > 0) {
  document.getElementById('target').innerHTML = "Even Numbers: " + even.join(', ');
} else {
  document.getElementById('target').innerHTML = "Even Numbers: None"
}
