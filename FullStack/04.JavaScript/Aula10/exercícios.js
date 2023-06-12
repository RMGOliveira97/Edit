// Exercise 1: Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 2: Print even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercise 3: Print odd numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 4: Print the sum of numbers from 1 to 10.
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log("Soma " + sum);
}

// Exercise 5: Print the factorial of a given number.
let fatorial = 1;

for (let i = 5; i > 0; i--) {
  fatorial = fatorial * i;
  console.log(fatorial);
}

// Exercise 6: Print a multiplication table for a given number (from 1 to 10).
const number = 7;

for (i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Exercise 7: Print the Fibonacci sequence up to a given number of terms.
const fibonacci = [1, 1];

for (let i = 2; i < 10; i++) {
  fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}
console.log(fibonacci.join());

// Exercise 8: Print the reverse of a given string.
const string = "Hello World";
let reverseString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverseString = reverseString + string[i];
}
console.log(reverseString);

// Exercise 9: Print the length of each word in a sentence.
const intro = "Print the length of each word in a sentence";
const splitSentence = intro.split(" ");

for (let i = 0; i < splitSentence.length; i++) {
  console.log(splitSentence[i] + ":" + splitSentence[i].length);
}

let count = 0;

for (let i = 0; i < intro.length; i++) {
  if (i === intro.length - 1) {
    console.log(count + 1);
    break;
  }
  if (intro[i] === " ") {
    console.log(count);
    count = 0;
    continue;
  }
  count++;
}

// Exercise 10: Print the number of vowels in a given string.
const string2 = "Print the number of vowels in a given string";
const vowels = ["a", "e", "i", "o", "u"];
let count2 = 0;

for (i = 0; i < string2.length; i++) {
  if (vowels.includes(string2[i].toLowerCase())) {
    count2++;
  }
}
console.log(count2);
