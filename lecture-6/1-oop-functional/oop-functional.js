// functional syntax
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHi = function () {
        return `Hi, my name is ${this.getFullName()}`;
    };

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.createAnonymous = function () {
    return new Person('Anonymous', '');
};

const jack = new Person('Jack', 'Williamson');
jack.sayHi();
const anon = Person.createAnonymous();

function Employee(firstName, lastName, salary) {
    Person.call(this, firstName, lastName);
    this.salary = salary;

    this.getSalaryAndGreeting = function () {
        return `${this.sayHi()} and my salary is ${this.salary}`;
    }
}

const john = new Employee('John', 'Doe', 1000);
console.log(john.sayHi());
console.log(john.getSalaryAndGreeting());

console.log(Employee.prototype.__proto__ === Person.prototype);