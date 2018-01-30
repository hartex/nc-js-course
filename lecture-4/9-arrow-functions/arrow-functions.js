const values = [1, 2, 3, 4, 132, 22];

// generic arrow function
const total1 = values.reduce((a, b) => a + b, 0);

// if there is only one argument parentheses can be omitted
const total2 = values.reduce(a => a + 2, 0);

// can contain block of statements
const total3 = values.reduce(a => {
    console.log(a);
    // there should be explicit 'return' inside block
    return a;
}, 0);

// if you want to return an object you must use parentheses
const total4 = values.map(a => ({
    a,
    aaa: 123
}));

((a) => {
    console.log(this);
    console.log(a);
    //console.log(arguments); // Error
})(1, 2);