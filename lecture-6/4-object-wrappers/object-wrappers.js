/* 
  there are many built in classes with prototypes and also every primitive has one
  like: Number.prototype, Boolean.prototype, String.prototype
 */

const a = "some text";

console.log(a.toUpperCase());
// object wrapper is created like this: new String("some text")
// method toUpperCase is invoked
// new String destroyed, result is returned