'use strict';

const start = 100;
const end = 400;

function checkLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

for (let i = start; i <= end; i++) {
  if (checkLeapYear(i)) {
    console.log(i);
    document.querySelector('#target').innerHTML += `<li>${i}</li>`;
  }
}

/* hint for ex 10

let numberOfInterests = 0
for (simulations) {
    let sum = 0;
    for (dice){
        result = die roll
        add result to sum
    }
    check if sum is the number on interest
        if so -> numberOfInterests++
}

*/
