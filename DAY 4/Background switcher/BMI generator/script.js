// Select the input fields and button
let weightInput = document.querySelector('.wt');
let heightInput = document.querySelector('.ht');
let submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function() {
    calculate();
});

function calculate() {

    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    // Calculate BMI
    let bmi = (weight / (height * height)) * 10000;

   
    document.querySelector('.bmi').innerHTML = bmi;


    let resultText;
    if (bmi < 18.5 && bmi > 0) {
        resultText = 'Under Weight';
    } else if (bmi >= 18.5 && bmi <= 25) {
        resultText = 'Normal';
    } else if (bmi > 25 && bmi <= 30) {
        resultText = 'Over Weight';
    } else if (bmi > 30) {
        resultText = 'Obese';
    } else {
        resultText = 'Invalid';
    }

    // Display the result
    document.querySelector('.result').innerHTML = resultText;
}
