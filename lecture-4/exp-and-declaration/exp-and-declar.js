"use strict";

// function declaration
function fun1() {
    console.log('hi');
}

// function expression
const fun2 = function (){
    console.log('hi');
}

var age = 20;
if (age >= 18) {
  function sayHi() {
    console.log( 'Прошу вас!' );
  }
} else {
  function sayHi() {
    console.log( 'До 18 нельзя' );
  }
}

sayHi();