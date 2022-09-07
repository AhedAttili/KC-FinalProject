alert("This Website Is Going To See If Your Body Is Healthy, And If Not It Will Help You Achieve It")

function BMI (weight, height) {
  let result = weight / (height * height);
  return result;
}

console.log (BMI(70, 1.7));

function Status (bmi) {
if (bmi < 18.5) {
  return ("You Are UnderWeight");
} else if (bmi >= 18.5 && bmi < 25) {
 return ("Your Weight Is Healthy");
} else if (bmi > 18.5) {
return ("You Have Obesity")
} else {
  return ("NaN")
}
}

function Calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = BMI(weight, height);

  let desc = Status(bmi);

  let div = document.getElementById('result');

  div.innerText = bmi + " == " + desc;
}

