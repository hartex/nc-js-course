// for loop
// for ([initialExpression]; [condition]; [incrementExpression]) statement
for (let step = 0; step < 5; step++) console.log(step);

// do/while
let z = 0;
do {
    console.log(z);
    z += 1;
} while (z < 5);

// while
let n;
while (n < 3) {
    n += 1;
    console.log(n);
}

// while(true) the same as for(;;)

// break and continue
for (let step = 0; step < 5; step++) {
    if (step == 2) break;
    console.log(step);
}

for (let step = 0; step < 5; step++) {
    if (step == 2) continue;
    console.log(step);
}

// for ... in
// iterates over property names
for (let vvv in {
    a: 1,
    b: 2,
    c: 3
}) {
    console.log(vvv);
}

for (let vvv in ['d', 'dsd', 'sd']) {
    console.log(vvv);
}

// for...of (beware! ES6)
// iterates over iterable objects: Array, Map, Set, arguments 
// note: can't work with object literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

for (let vvv of ['d', 'dsd', 'sd']) {
    console.log(vvv);
}