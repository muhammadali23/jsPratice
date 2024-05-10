// cumulative sum
// positive cum number
function cumSum(arr) {
  let sum = [];
  let sumOfTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfTwo += arr[i];
    if (sumOfTwo > 0) {
      sum.push(sumOfTwo);
    }
  }
  return sum;
}
let arr = [1, -2, 3, 4, -6];
// console.log(cumSum(arr));

// Find Numbers with Even Number of Digits

function numWithEven(arr) {
  let evenNum = [];
  let num;
  let numLength;
  let num1;
  for (let i = 0; i < arr.length - 1; i++) {
    num = arr[i].toString();
    numLength = num.length;
    if (numLength % 2 === 0) {
      num1 = Number(num);
      evenNum.push(num1);
    }
  }
  return evenNum;
}

let arr1 = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];
// console.log(numWithEven(arr1));

// optimize code

function numWithEven(arr) {
  return arr.filter((num) => num.toString().length % 2 === 0);
}

let arr2 = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];
// console.log(numWithEven(arr2));

// palindrome string

// let str = "dad";
// let len = str.length;
// let msg = "It is palindrome";
// for (let i = 0; i < len / 2; i++) {
//   if (str[i] != str[len - 1 - i]) {
//     msg = "It is not palindrome";
//   }
// }
// console.log(msg);

// Given two sorted arrays A and B, find the merged sorted array C by merging A and B.

function mergeArray(arr1, arr2) {
  let arr3 = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
  }
  return arr3;
}

let arr11 = [1, 2, 3, 4, 4];
let arr12 = [2, 4, 5, 5];
// console.log(mergeArray(arr11, arr12));

function calculateProductsExceptAtIndex(arr) {
  const result = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }

  return result;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const result = calculateProductsExceptAtIndex(array);
// console.loclsg(result);

// write a program when i pass 4 it return 5 and when I pass 5 it return 4 without using if-else or for loop

function swapNumbers(num) {
  return num + 1 - 2 * (num % 2);
}

// Test cases
console.log(swapNumbers(8)); // Output: 5
console.log(swapNumbers(6)); // Output: 4
