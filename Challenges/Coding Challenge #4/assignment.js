var tip;
var billValue = 275;

if (billValue >= 50 && billValue <= 300) {
  tip = billValue * (20 / 100);
  var total = tip + billValue;
  console.log(
    `The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`
  );
} else {
  tip = billValue * (15 / 100);
  var total = tip + billValue;
  console.log(
    `The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`
  );
}
