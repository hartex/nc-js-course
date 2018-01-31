// object creation using object literal
const object = {
    name: 'sfdssdf',
    132: '1332',
    'asdsa': 12313,
    null: 1551,
    hello: function(){
        return 'hello';
    }
}

console.log(object.name);
console.log(object['name']);

object.name = 'john';
object.aaaaa = 123321;
object.func = function(){
    return 'function';
}
object.func();
object.hello();

// object creation using Object constructor
const anotherObject = new Object();
anotherObject.name = "james"
anotherObject.age = 21;

// object creation using create() method
const obj = Object.create(null);
obj.name = 'will'
obj.age = 12;

'name' in obj;

// can delete only objects own properties (not inherited)
delete obj.name;

'name' in obj;