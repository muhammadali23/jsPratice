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
console.log(numWithEven(arr1));

// optimize code

function numWithEven(arr) {
  return arr.filter((num) => num.toString().length % 2 === 0);
}

let arr2 = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];
console.log(numWithEven(arr2));
