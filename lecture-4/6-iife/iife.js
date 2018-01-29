// that things will not work
// function(){ /* code */ }(); /* SyntaxError: function statement requires a name */

// function foo(){ /* code */ }(); /* SyntaxError: syntax error (grouping operator can't be empty) */

// function foo(){ /* code */ }( 1 + 1 );

// function invocation result will be assigned to 'fun' variable
const fun = function (name) {
    return "hello, " + name;
}("browser");

console.log(fun);

(function () {
    console.log('hi there', arguments[0]);
})('afad');

// same as:
void function () {
    console.log('hi there', arguments[0]);
}('sdf');

// same as:
(function () {
    console.log('hi there', arguments[0]);
}('sdfsdf'));