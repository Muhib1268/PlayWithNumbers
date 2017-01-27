var fs = require('fs');


var number = require('./numberWord.js').numberFormat;
var arr = number(process.argv[2]);
console.log(arr);
