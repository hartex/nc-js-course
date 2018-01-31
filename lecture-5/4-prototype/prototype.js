/* 
  all objects has inner hidden property [[Prototype]] 
  and we can access it using __proto__
 */
const obj = {
    name: 'john'
}

// by default objects get Object.prototype as a prototype
obj.__proto__

// base object
let point = {
    x: 10,
    y: 20,
};

// inherit it from base object
let point3D = {
    z: 30,
    __proto__: point,
};

/* 
  also can be created like that:
  let dict = Object.create(point);
  dict.z = 30; 

  or like that: 
  let dict = Object.create(point, {z: {value: 30}});
*/

console.log(
    point3D.x, // 10, inherited
    point3D.y, // 20, inherited
    point3D.z // 30, it's own property
);

// you should not use __proto__, although it is standardized
// you better use this methods:
// Object.create()
// Object.getPrototypeOf()
// Object.setPrototypeOf()
// Object.isPrototypeOf()
// Object.assign()