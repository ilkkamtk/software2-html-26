'use strict';

// convert this same python assignment to JavaScript
/* 
year = int(input("Give the year?"))
if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    print("This year is a leap year")
else:
    print("This year is not a leap year")
*/

const year = prompt('Give the year?');
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  document.querySelector('#target').innerText = `${year} is a leap year`;
} else {
  document.querySelector('#target').innerText = `${year} is not a leap year`;
}
