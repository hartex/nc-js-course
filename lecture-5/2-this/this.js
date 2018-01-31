// 'use strict';

function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

/* 
  There are four rules for how this gets set, 
  and they're shown in those last four lines of that snippet. 
  1) foo() ends up setting this to the global object in non-strict mode 
   -- in strict mode, this would be undefined and you'd get an error in accessing the bar property 
   -- so "global" is the value found for this.bar. 
  2) obj1.foo() sets this to the obj1 object. 
  3) foo.call(obj2) sets this to the obj2 object. 
  4) new foo() sets this to a brand new empty object. 
*/

foo();
obj1.foo();

// call will be discussed later
foo.call(obj2);
new foo();

// another example
const obj3 = {
    name: 'john'
}
const obj4 = {
    name: 'will'
}

obj3.hello = function () {
    console.log('hello ' + this.name);
}
obj4.hello = obj3.hello;

obj3.hello();
obj4.hello();

// arrow functions this is always static (defined by lexical environment)
// so arrow function "this" is inherited from parent context
var x = 10;
let foo = {
    x: 20,
    // dynamic "this"
    bar() {
        return this.x;
    },
    // lexical "this".
    baz: () => this.x
};

foo.bar();
foo.baz()