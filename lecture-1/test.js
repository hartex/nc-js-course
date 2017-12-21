function Person(name) {
    if(typeof name === 'string'){
        console.log('invoked with correct parameters')
    }
    this.name = name;
}
const p = new Person("Vasya");
console.log('----------');

class Man {
    constructor(){
        return {name:'vasya'}
    }
}

const z = new Man();
console.log(z);