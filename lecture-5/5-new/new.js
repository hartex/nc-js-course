// whole bunch of shapes
const shape1 = {
    x: 2,
    y: 3,
    toString: function () {
        console.log('Shape with x ' + this.x + 'and y:' + this.y);
    }
};

const shape2 = {
    x: 4,
    y: 1,
    toString: function () {
        console.log('Shape with x ' + this.x + 'and y:' + this.y);
    }
};

const shape3 = {
    x: 2,
    y: 10,
    toString: function () {
        console.log('Shape with x ' + this.x + 'and y:' + this.y);
    }
};


// with "new" it can be done like that:
function Shape(x, y) {
    // __ that JS engine do under hood
    // this = {};

    // in this we write method and properties
    this.x = x;
    this.y = y;

    // __ that JS engine do under hood
    // return this;
}

Shape.prototype.toString = function () {
    console.log('Shape with x ' + this.x + 'and y:' + this.y);
};

const shape4 = new Shape(1, 2);

console.log(Shape.prototype);

// constructor is a special property of 
console.log(shape4.constructor);

shape4 instanceof Shape;
// same as:
Shape.prototype.isPrototypeOf(shape4);

// every function has a prototype property
// all object created with new will inherit from that prototype
console.log(Shape.prototype);

// Shape.prototype stores prototype from witch all objects created with "new" will inherit their properties

function Circle(x, y, r) {
    Shape.apply(this, x, y);
    this.r = r;
}

Circle.prototype = Object.create(Person.prototype);
Circle.prototype.constructor = Circle;

const circle = new Circle(1, 2, 4);