// practice task 1
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFarenheit(num) {
  // Formula : (45°C × 9/5) + 32
  const output = (num * 9) / 5 + 32;

  return output;
}
// const result = celsiusToFarenheit(100);
// console.log(result);

// practice task 2
// You are given an array of numbers. Count how many times the a number is repeated in the array.
function find5(arr, find) {
  const findElement = [];

  for (const element of arr) {
    if (element === find) {
      findElement.push(element);
    }
  }

  const result = findElement.length;
  return result;
}
const numbers = [5, 6, 11, 12, 98, 5];
const result = find5(numbers, 25);
console.log(result);

// practice task 3
// Write a function to count the number of vowels in a string.

function vowels(str) {
  const a = "a";
  const e = "e";
  const i = "i";
  const o = "o";
  const u = "u";
  const vowel = [];
  for (const ele of str.toLowerCase()) {
    if (ele === a) {
      vowel.push(ele);
    } else if (ele === e) {
      vowel.push(ele);
    } else if (ele === i) {
      vowel.push(ele);
    } else if (ele === o) {
      vowel.push(ele);
    } else if (ele === u) {
      vowel.push(ele);
    }
  }
  const lengthOfVowel = vowel.length;
  return lengthOfVowel;
}

const string = "A vowel is a syllabic speech sound pronounced without any stricture in the vocal tract.";
const result1 = vowels(string);
// console.log(result1)

// practice task 4





// practice task 5
// Generate a random number between 10 to 20
// eta ektu kom bujhchi
console.log(Math.random() * 10 + 10);
