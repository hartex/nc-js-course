// new syntax for classes
class Person {
    // special function to construct objects
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // you can only define methods here, not properties
    sayHi() {
        // template strings
        return `Hi, my name is ${this.fullName}`
    }

    // static methods 
    static createAnonymous() {
        return new Person('Anonymous', '');
    }

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const jack = new Person('Jack', 'Williamson');
jack.sayHi();
const anon = Person.createAnonymous();

// prototype chain goes here
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        // accessing parent constructor using "super"
        // it can be done only inside constructor
        super(firstName, lastName);
        this.salary = salary;
    }

    getSalaryAndGreeting() {
        return `${super.sayHi()} and my salary is ${this.salary}`;
    }
}

const john = new Employee('John', 'Doe', 1000);
console.log(john.sayHi());
console.log(john.getSalaryAndGreeting());

console.log(Employee.prototype.__proto__ === Person.prototype);