var fs=require('fs');

var primes = require('./prime.js').sumOfPrime;
var nthsum = primes(process.argv[2], process.argv[3]);
console.log(nthsum);


// var primes = require('./prime.js').nthPrime;
// var nth = primes(process.argv[2], process.argv[3]);
// console.log(nth);

//
// var primes = require('./prime.js').primeSieve;
// var arr = primes(process.argv[2]);
// console.log(arr);
