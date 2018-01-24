const z = [1, 31, 323];
const f = new Array("21", "zz", "aa", 222);

console.log(z.length);

console.log(z[0]);

z.forEach(function (item, index, array) {
    console.log(item, index);
});

// add to the end
z.push('dsf', '123');

// remove from the end
z.pop();

// add to the start
z.unshift('sdf');

// remove from the start
z.shift();

// array filter
const aaa = z.filter(function (item, index, array) {
    return item > 2;
})
console.log(aaa);

// array map
const jjj = z.reduce(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, 0)
console.log(jjj);

// array map
const kkk = z.map(function (currentValue, index, array) {
    return currentValue * 2;
})
console.log(kkk);