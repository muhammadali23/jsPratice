// function withdrawCurrencyNotes(...amounts) {
//     const denominations = [100, 50, 10];
//     const notes = { 100: 0, 50: 0, 10: 0 };

//     // Calculate the total amount from the rest parameter
//     // let totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);
//     let totalAmount = amounts;

//     // Calculate the number of each denomination
//     for (const denomination of denominations) {
//       notes[denomination] = Math.floor(totalAmount / denomination);
//       totalAmount %= denomination;
//     }

//     // Construct the alert message
//     const alertMessage = `You will have ${notes[100]} hundred notes, ${notes[50]} fifty notes, and ${notes[10]} ten notes.`;

//     // Display the alert
//     alert(alertMessage);
//   }

//   // Example usage:
//   const userInput1 = prompt("Enter the amount in hundreds (e.g., 470):");
// //   const userInput2 = prompt("Enter an additional amount in hundreds (optional):");
//   const amountToWithdraw1 = parseInt(userInput1, 10);
// //   const amountToWithdraw2 = parseInt(userInput2, 10);
//   withdrawCurrencyNotes(amountToWithdraw1);
// //   , amountToWithdraw2

// function noteCheck(...amount){
//     let notesOf100= Math.floor(amount/100);
//     let notesOf50= Math.floor((amount%100)/50);
//     let notesOf10= Math.floor(((amount%100)%50)/10);
//     let notes= Math.floor(((amount%100)%50)%10);
//     alert(`you have ${notesOf100} hundred note, ${notesOf50} fifty notes and ${notesOf10} 10 notes
//     Remaining amount is ${notes}.`);
//   }
//   let amounts = parseInt(prompt("Enter the amount in hundreds (e.g., 470):"));
//   noteCheck(amounts);

//   confirm("hello world")

// currying and partial application

// function sum(a) {
//     return function (b){
//         return a+b;
//     }
// }
// function substract(a) {
//     return function (b){
//         return a-b;
//     }
// }
// function multiply(a) {
//     return function (b){
//         return a*b;
//     }
// }
// function divide(a) {
//     return function (b){
//         return a/b;
//     }
// }
// console.log("sum= ",sum(4)(2));
// console.log("substract= ",substract(4)(2));
// console.log('multiply= ',multiply(4)(2));
// console.log('divide= ',divide(4)(2));
