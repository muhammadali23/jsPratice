//find the circumference of a circle
// const : normally the variables declare with const are in upercase.

const PI = 3.14159;
// let radius = Number(prompt("Enter value of radius"));
// let circumference = 2 * PI * radius;

// console.log(circumference);
//_____________________________________
//|                                 |
//|now by using user input in html  |
//|_________________________________|___

document.getElementById("btn").onclick = function () {
  let radius = Number(document.getElementById("text_input").value);
  let circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference;
};

//_____________________________________
//|                                 |
//|counter application              |
//|_________________________________|___
