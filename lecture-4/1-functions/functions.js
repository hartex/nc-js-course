// basic function
function zzz(v, c, d) {
    console.log(d);

    // in JS there is no such thing as 'function overloading'
    // and functions receive arbitrary number of arguments
    console.log(arguments);

    // we can return value from function
    return 2;
}

console.log(zzz(1, 2, 3, 22, 332, 1));

// we can add properties to a function
zzz.name = 'John';
zzz.age = 22;

console.log(zzz.name, zzz.age);

// strategy for arguments passing in JS called 'call-by-sharing'
function ddd(prim, obj) {
    prim = 333
    obj.name = "dddddd";
}
const primitive = 222;
const obj = {
    aaa: 123
};
ddd(primitive, obj);
console.log(primitive, obj);

// functions - first class citizens
// pass functions as an argument (another term is - callback)
function fff(a) {
    return a() + 5;
}

console.log(
    fff(function () {
        return 2;
    })
);

// return function from another function
function kkk(number) {
    // anonymous inner function 
    return function (anotherNumber) {
        return number + anotherNumber;
    }
}

console.log(kkk(2)(3));