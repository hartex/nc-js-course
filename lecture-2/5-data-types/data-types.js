"use strict";
// everything is better with use strict

// numbers:
const number = 34234,
    string = 'sdfsdf',
    bool = true,
    symb = Symbol('identifier'), // Symbol creates unique identifier
    null_ = null,
    undefined_ = undefined,
    obj = {};

// all this declarations are literals except undefined (undefined is identifier)

// typeof - returns string wit operand type
console.log(typeof number);
console.log(typeof string);
console.log(typeof bool);
console.log(typeof symb);
console.log(typeof null_);
console.log(typeof undefined_);
console.log(typeof obj);

// function is not separate, it "extends" object
console.log(typeof function () {
});

// Symbol("a") !== Symbol("a")
// typeof NaN