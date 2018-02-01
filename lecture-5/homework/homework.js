/*
  you should implement data structure called Linked list (in can be doubly linked or singly linked)
  and all methods that listed below
 */
const list = new LinkedList(1, 23, 44, 'dsfs', {});

/* 
  methods can be implemented in functional style - list should be immutable
  and every operation on list will not modify it, but will return new instance of a list

  or in imperative style - methods will modify original list
 */

// loop on list
for (let i = 0; i < list.length; i++) {
  console.log(list.get(i));
}

// forEach on list
list.forEach((element, index, array) => console.log(element));

// set an element to specific position
list.set(1, 'aaaaa');

// adds element or elements at the end of the list
list.push('dsdf', 12);

// adds element or elements at the beginning of the list
list.unshift('sdd', 222);

// removes last element from the list
list.pop();

// removes first element from the list
list.shift();

// returns boolean
list.contains('sdfs');

// returns string representation of a list
list.toString();

// reverse list
list.reverse();

// ----- advanced tasks ----- 

list.sort();

// you can experiment on that with "property descriptors"
for (i in list) {
  console.log(i);
}