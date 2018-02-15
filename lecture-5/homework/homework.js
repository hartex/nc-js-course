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

// forEach on list - iterates over all elements in list and invokes callback method for each element 
list.forEach((element, index) => console.log(element));

// set an element to specific position
list.set(1, 'aaaaa');

// adds element or elements at the end of the list
list.push('dsdf', 12);

// adds element or elements at the beginning of the list
list.unshift('sdd', 222);

// removes last element from the list and returns it
list.pop();

// removes first element from the list and returns it
list.shift();

// returns boolean
list.contains('sdfs');

// returns string representation of a list
list.toString();

// reverse list and returns it (or new list)
list.reverse();

// ----- advanced tasks (implementation is optional) ----- 

// sort list semantically (using < or >)
list.sort();

// it can be done using "ES6 iterators https://learn.javascript.ru/iterator
for (let i of list) {
  console.log(i);
}