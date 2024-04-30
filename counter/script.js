const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countLabel = document.getElementById("result");
let count = 0;

increase.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decrease.onclick = function () {
  count--;
  if (count < 0) {
    alert("Value is already zero");
  } else {
    countLabel.textContent = count;
  }
};
reset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
