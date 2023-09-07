const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("calculate");
const p = document.getElementById("p");

btn.addEventListener("click", calcTotal);

function calcTotal() {
  const billValue = Number(bill.value);
  const tipValue = Number(tip.value);
  //   console.log("calculating");

  const total = billValue + (billValue * tipValue) / 100;
  document.getElementById("total").innerHTML = total.toFixed(2);
}
