// index.js is a default name for main module
// so if you want to publish your package to npm and make you code available for others 
// you should export everything in index.js

exports.printMsg = function () {
    console.log('hi there');
};

exports.message = 'hi there';

const _ = require('lodash');
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));