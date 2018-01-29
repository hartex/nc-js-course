"use strict";

// function declaration
function fun1() {
    console.log('hi');
}

// function expression
const fun2 = function (){
    console.log('hi');
}

// Named Function Expression
// the name of the function is always made available in the local scope of the function itself.
var foo = function bar() {
  bar(); // works
}
//bar(); // ReferenceError