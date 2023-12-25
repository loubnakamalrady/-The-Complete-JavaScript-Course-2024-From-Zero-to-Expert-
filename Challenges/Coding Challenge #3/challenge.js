const dolphinesAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinesAverage > koalasAverage) {
  console.log("Dolphines!!");
} else if ((dolphinesAverage >= 100) & (koalasAverage >= 100)) {
  console.log("draw!!!");
} else {
  console.log("Koalas!!!");
}
