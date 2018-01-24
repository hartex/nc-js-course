// 1.let and const scope is block {...}

// TODO: better examples needed
let foo = 1;

if (true) {
    let foo = 10;
    console.log(foo); // 10 inside block
}

console.log(foo); // 1 outside

// 2.let and const can be accessed only after declaration
/* console.log(vvvv); //error
let vvvv = 5; */

//but it works with var
/* console.log(qqqq); // undefined
var qqqq = 5; */

// let can't be declared twice
/* let sss = 0;
let sss = 0; */

// 3. for let new cycle in for loop new variable is declared
// it can be described as 'loop declaration scope'
/* for(let i = 0; i<10; i++) { console.log(i) }
for(let i = 0; i<10; i++) { console.log(i) } */

// but with var you can access variable even after cycle:
/* for(var i=0; i<10; i++) { console.log(i)}
console.log(i); */

// it easy solves classic closure problem
/* for(var fq = 0; fq<10; fq++) {
    setTimeout(function(){
        console.log(fq) 
    }, 1000)
} */

// const creates immutable variable
// const zz = 5;