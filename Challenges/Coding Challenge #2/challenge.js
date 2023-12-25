const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBmi = (markWeight / Math.pow(markHeight, 2)).toFixed(2);
const johnBmi = (johnWeight / Math.pow(johnHeight, 2)).toFixed(2);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI(${markBmi}) is higher than John's (${johnBmi}) !`);
} else {
  console.log(`Johns's BMI(${johnBmi}) is higher than Mark's (${markBmi}) !`);
}
