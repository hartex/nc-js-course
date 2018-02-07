// executes all code in module.mjs but doesn't import anything
import './module';

// import as an object
import * as module1 from './module';

// named exports are placed in curly braces
import {square, CONST, someObject as object} from './module';

console.log(module1.CONST === CONST);

// default export
import defaultConst from './module';
console.log(defaultConst);

// imports created as immutable binding, 
// so i can change non primitive types from another module
object.showName();
object.name = 'some other name';
object.showName();

// but can't affect primitives