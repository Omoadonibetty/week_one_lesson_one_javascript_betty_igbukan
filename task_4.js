let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[3]);

let pushNumbers = numbers.push(7, 8, 9);
console.log(pushNumbers);
console.log(numbers);

let popNumbers = numbers.pop();
console.log(popNumbers);
console.log(numbers);

let shiftNumbers = numbers.shift();
console.log(shiftNumbers);
console.log(numbers);

let unshiftNumbers = numbers.unshift(12);
console.log(unshiftNumbers);
console.log(numbers);