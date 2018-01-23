/* 
variables
*/
var foo;

foo = 323;

var bar1 = 300,
    bar2 = 3400;

// $ or _ also is valid variables identifiers 
var $ = 1;
var _ = 2;

// before 'use strict' you can create variable without var, but now it is prohibited
fooBar = 3; // ReferenceError

// variables should be "camelCase"

// var scope is global or function

// global scope
var aaaa = 12313;

// function scope
function zzz() {
    var foo = 234234;
    console.log(foo);
}

console.log(zzz());
console.log(foo);


if (true) {
    var ssss = 5;
}

console.log(ssss);