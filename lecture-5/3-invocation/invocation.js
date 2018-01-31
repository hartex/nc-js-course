// call() and apply()
function func(greeting) {
    return greeting + ' ' + this.name;
}

// can have as many arguments as you want
const john = {
    name: 'John',
    age: 23,
}

const will = {
    name: 'Will',
    age: 22,
}

func.call(john, 'Hi,');
func.call(will, 'Hi');

// apply() works the same way, but args passes as array
func.apply(john, ['Hi,']);
func.apply(will, ['Hi,']);

// bind() 
// using bind() it's easy to solve classic timeout problem
const vasya = {
    name: 'Vasya',
    hello: function () {
        setTimeout(function () {
            console.log(this.name)
        }.bind(this), 1000)
    }
}

vasya.hello();
// also currying can be done with bind

// call and apply doesn't works with arrow functions
const arrowFunc = (greeting) => greeting + ' ' + this.name;
arrowFunc.call(john, 'Hi,');
arrowFunc.call(will, 'Hi');