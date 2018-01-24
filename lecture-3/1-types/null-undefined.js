// how to get undefined
var zz;
console.log(zz);

var obj = {}
console.log(obj.zzz);

function z(f) {
    console.log(f);
}

z();

console.log(void (0));

// undefined is read only predefined variable
console.log('undefined' in window);

// in JS you can get null only by setting it programmatically or from DOM operations
// roughly speaking JS engine use 'undefined' and programmers should use 'null' 

console.log(null == undefined);
console.log(null === undefined);
