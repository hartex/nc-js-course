"use strict";

// recursion using Named Function Expression
const result = function fun(value) {
    // 5 - is a recursion basis
    if (value > 5) {
        return value;
    } else {
        return fun(value + 1);
    }
}(1);
console.log(result);

// not a tail recursion
function factorial1(x) {
    if (x <= 0) {
        return 1;
    } else {
        return x * factorial1(x - 1);
    }
}
console.log(factorial1(3));

// tail recursion
function factorial2(n) {
    return facRec(n, 1);
}

function facRec(counter, acc) {
    if (counter <= 1) {
        return acc;
    } else {
        return facRec(counter - 1, counter * acc);
    }
}
console.log(factorial2(3));