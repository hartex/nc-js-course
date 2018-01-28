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