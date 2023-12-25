var markWeight = 95;
var markHeight = 1.88;
var johnWeight = 85;
var johnHeight = 1.76;

var markBmi = Math.pow(markWeight / markHeight, 2) / Math.pow(markHeight, 2);
var johnBmi = Math.pow(johnWeight / johnHeight, 2) / Math.pow(johnHeight, 2);

var markHigherBMI = markBmi > johnBmi ? console.log("Yes") : console.log("No");

console.log(`Marks weights ${markWeight} kg, ${markHeight} m tall, and his BMI is ${markBmi}. John weights ${johnWeight} kg, ${johnHeight} 
m tall and his BMI is ${johnBmi}.`);
