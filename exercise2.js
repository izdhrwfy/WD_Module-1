// 1. Code to convert celcius to fahrenheit

let inputCelcius = 60;

let convertToFahrenheit = (inputCelcius * 9) / 5 + 32;
console.log(
  `${inputCelcius} degree Celcius = ${convertToFahrenheit} degree Fahrenheit`
);

// 2. a code to check whether the number is odd (ganjil) or even (genap)

let inputNumber = 25;

if (inputNumber % 2 == 0) {
  console.log(`${inputNumber} is Even`);
} else {
  console.log(`${inputNumber} is Odd`);
}

// 3. Code to Check whether the number is prime number or not

// bilangan prima adalah bilangan yang hanya bisa dibagi 1 dan bilangan itu sendiri.

let number = 2;

let isPrime = true;
message = `${number} adalah bilangan prima`;

if (number <= 1) {
  console.log(`${number} BUKAN bilangan prima`);
}

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    message = `${number} BUKAN bilangan prima`;
    break;
  }
}

console.log(message);

// 4. Find the sum of the numbers 1 to N

var numberOfTimes = 3;
let total = 0;
let stringX = "";
for (var i = numberOfTimes; i > 0; i--) {
  total = total + i;
  if (i == 1) {
    stringX = stringX + "1";
  } else {
    stringX = stringX + `${i}` + "+";
  }
}
console.log(`${numberOfTimes} -> ${stringX} = ${total}`);

// 5. factorial

let numberInput = 6;
let totalA = 1;
let stringN = " ";

for (let f = numberInput; f >= 1; f--) {
  console.log(f);
  totalA = totalA * f;

  if (f == 1) {
    stringN = stringN + "1";
  } else {
    stringN = stringN + `${f}x`;
  }
}

console.log(`${numberInput}! -> ${stringN} = ${totalA}`);

// 6. Fibonaci

let prev = 0;
let current = 1;
let inputDataFibo = 15;

if (inputDataFibo == 0) {
  console.log(0);
} else if (inputDataFibo == 1) {
  console.log(1);
} else if (inputDataFibo >= 2) {
  for (let h = 2; h <= inputDataFibo; h++) {
    newFibo = prev + current;
    prev = current;
    current = newFibo;
  }
}

console.log(`Fibonacci ${inputDataFibo} -> ${current}`);
