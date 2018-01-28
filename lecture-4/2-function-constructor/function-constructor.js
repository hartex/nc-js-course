// Function - is a function constructor
// using in we can create functions dynamically
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 4));

sum.zzz = 1;
sum.fff = 'aaa';
console.log(sum.zzz, sum.fff);