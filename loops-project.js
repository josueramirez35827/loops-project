// Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.

function nums() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
nums();



// Using a while loop, return an array that contains all odd numbers between 3 and 103

function normArray() {
  let oddArray = []
  let i = 2;

  while (i <= 103) {
    i++;

    if (i % 2 !== 0) {
      oddArray.push(i);
    }
  }
  console.log(oddArray);
}
normArray();



// arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers, 
// for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(`The total sum of all the numbers is ${sum}`);



// Use a loop to display the numbers 9 to 0 in descending order.

function descendingOrder() {
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
}
console.log(descendingOrder());



// Write a function computing the factorial of n

function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 9;
answer = factorial(n)
console.log(`The factorial of ${n} is ${answer}`);



// Write a function using a for loop that returns the sum of all numbers from 1 to n.

function numberSum(N) {
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;
  }
  return total;
}



// Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. 
// Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ

function toWeirdCase(getString) {
  var returned = '';
  for (var i = 0; i < getString.length; i++) {
    var method = i % 2 === 0 ? 'toUpperCase' : 'toLowerCase';
    returned += getString[i][method]();
  }
  return returned;
}

console.log(toWeirdCase('Looks'));



