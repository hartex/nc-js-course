// function constructor with its prototype property can be called "class"
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

console.log(Person.prototype.constructor === Person); // true

// common methods goes to prototype
Person.prototype.sayHi = function () {
    return `Hi, my name is ${this.getFullName()}`;
};

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

// static methods goes to a function object
Person.createAnonymous = function () {
    return new Person('Anonymous');
};

/* 
  when constructing object using "new"
  reference to Person.prototype is set to its __proto__
 */
const jack = new Person('Jack', 'Williamson');
console.log(jack.sayHi());

jack.__proto__ === Person.prototype; // true
Person.prototype.constructor === Person; // true

const anon = Person.createAnonymous();

function Employee(firstName, lastName, salary) {
    Person.call(this, firstName, lastName);
    this.salary = salary;
}

// so order in prototype chain should be like that
// john -> Employee.prototype -> Person.prototype
// so we can do:
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSalaryAndGreeting = function () {
    return `${this.sayHi()} and my salary is ${this.salary}`;
};

const john = new Employee('John', 'Doe', 1000);

console.log(john.getSalaryAndGreeting());
console.log(john.sayHi());

console.dir(john);