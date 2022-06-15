function myFunc() {
  percent1 = document.getElementById("basic-addon2").innerHTML;
  console.log(percent1);
  percent2 = percent1.slice(0, -1);
  console.log(percent2);
  totalAmount = document.getElementById("calc-amount").value;
  console.log(totalAmount);
  result = totalAmount * (percent2 / 100);
  document.getElementById("result").innerHTML = result + "$";
}
