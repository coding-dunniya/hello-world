/**
 * Entry point of the application
 *
 * @format
 */

// import the bmi module here
const bmiModule = require('./bmi');

// import the http module
const http = require('http');
// import url module to parse request url
const url = require('url');

const server = http.createServer(function callback(req, res) {
    // this is the callback function which is executed
    // every time an incoming request is received
    const queryParams = url.parse(req.url, true).query;
    const height = parseInt(queryParams.height);
    const weight = parseInt(queryParams.weight);
    if (isNaN(height) || isNaN(weight)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('invalid height and weight parameters');
    }
    const bmi = bmiModule.calculate(height, weight);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Your BMI is ${bmi}`);
});

server.listen(3000);
