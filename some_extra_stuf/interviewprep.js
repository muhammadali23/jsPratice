// sum of odd numbers

function sumOddNum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum = sum + numbers[i];
    }
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, -6, -7, 8, 9];
// console.log(sumOddNum(numbers));

//2nd question

function maxChara(str) {
  let charCount = {};
  let maxChar = "";
  let maxCount = 0;
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }
  return maxChar;
}

const str = "abcaabdddeee";
console.log(maxChara(str));
