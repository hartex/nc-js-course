const esprima = require('esprima');
const fs = require('fs');

// lexical analysis:
// console.log(esprima.tokenize('const answer = 42'));

// syntactic analysis:
// console.log(esprima.parseScript('const answer = 42'));

// more complex example
/* fs.readFile('_example.js', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(esprima.parseScript(data, {}));
}); */

// example of transformation
// http://astexplorer.net/#/gist/418a98dd41b085f25868bf669306db60/28752717756f9bd9ea6a461b5e7bce1d8e42c00d
