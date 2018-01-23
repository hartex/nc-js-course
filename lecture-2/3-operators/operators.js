false && true;

"Cat" || "Dog";

"Cat" && "Dog";

// interesting operators:
// delete
var object = {
    aaa: 13,
    zz: 13231
}

var array = [1, 2, 3, 4];

delete {};
delete object.zz;
delete array[1];

// void
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/void
void (expression)
void expression

void function iife() {
    return 1232;
}();

// in
var trees = {
    redwood: 22,
    bay: 31,
    cedar: 44,
};
'redwood' in trees; //true
'bay' in trees; // true