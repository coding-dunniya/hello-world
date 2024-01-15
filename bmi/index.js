/**
 * A simple module to calculate the bmi
 * NOTE: This module can be imported anywhere and calculate function can be called
 * to get the bmi for any height and weight
 *
 * @format
 */

const calculate = function (height, weight) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    return bmi;
};

console.log('hello world');

module.exports = {
    calculate: calculate,
};
