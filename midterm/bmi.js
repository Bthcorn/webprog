function displayBmi() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const name = document.getElementById('name').value;
  const bmi = weight / (height * height);
  let interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Underweight";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Normal";
  }
  else if (bmi >= 25.0 && bmi <= 29.9) {
    interpretation = "Overweight";
  }
  else if (bmi >= 30.0) {
    interpretation = "Obese";
  } else {
    interpretation = "Invalid";
  }

  const bgColor = "#FFFF00"

  const tableDiv = document.getElementById('tableDiv');

  tableDiv.innerHTML = `
    <table style="border: 1px solid; border-collapse: collapse;">
    <thead>
    <tr>
      <th>BMI</th>
      <th>Interpretation</th>
    </tr>
    </thead>
    <tbody>
      <tr style="background-color: ${bmi < 18.5 ? bgColor : ""}">
        <td>Below 18.5</td>
        <td>Underweight</td>
      </tr>
      <tr style="background-color: ${bmi >= 18.5 && bmi <= 24.9 ? bgColor : ""}">
        <td>18.5 - 24.9</td>
        <td>Normal</td>
      </tr>
      <tr style="background-color: ${bmi >= 25.0 && bmi <= 29.9 ? bgColor : ""}">
        <td>25.0 - 29.9</td>
        <td>Overweight</td>
      </tr>
      <tr style="background-color: ${bmi >= 30.0 ? bgColor : ""}">
        <td>30.0 or greater</td>
        <td>Obese</td>
      </tr>
    </tbody>
    </table>
    <p>BMI of ${name} is ${bmi.toFixed(2)} and you are ${interpretation}.</p>
  `;
}

function calculate() {
  const button = document.getElementById('calculate');
  button.addEventListener('click', displayBmi, false);
}

window.addEventListener('load', calculate, false);