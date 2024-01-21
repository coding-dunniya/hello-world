/**
 * Entry point of the application
 *
 * @format
 */

// import the bmi module here
const bmiModule = require('./bmi');
const isPrime = require('quick-is-prime');

const height = 180;
const weight = 80;

function bmi() {
    const bmi = bmiModule.calculate(height, weight);
    console.log('Your BMI is ' + bmi);
}

function primeNumbers() {
    console.log(isPrime(7));
    console.log(isPrime(77777));
    console.log(isPrime(89876767))
    console.log(isPrime(91));
}

bmi();

primeNumbers();
