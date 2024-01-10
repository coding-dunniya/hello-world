/**
 * A simple module to calculate the bmi of the person
 */

const height = 180;
const weight = 80;


function bmi() {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log('Your BMI is ' + bmi);
}

bmi();
