/**
 * A simple module to calculate the bmi of the person
 *
 * @format
 */

// import the bmi module here
const bmiModule = require('./bmi');

const height = 180;
const weight = 80;

function bmi() {
    const bmi = bmiModule.calculate(height, weight);
    console.log('Your BMI is ' + bmi);
}

bmi();
