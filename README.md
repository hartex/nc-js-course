# nc-js-course

This repository contains code examples for [Netcracker's](https://www.netcracker.com/) [frontend development course](http://nn.edu-netcracker.com/).
That part of the course consist of 12 lectures about JavaScript, front-end development and it's modern ecosystem.

## Course structure

1. [Lecture #1](./lecture-1)
Introduction to JavaScript and it's specifications, console logging, debugging in browser, "script" tag, script loading and parsing.
2. [Lecture #2](./lecture-2)
Modern standard "use strict", statements and expressions, operators, variable and data types in JavaScript.
3. [Lecture #3](./lecture-3)
More on data types and types conversion in JavaScript, control flow statements (branching operators, loops and arrays).
4. [Lecture #4](./lecture-4)
Functions in JavaScript, eval(), scope chain, Function Declarations and Function Expressions, Immediately invoked function expressions, recursion and call stack, closures and arrow functions.
5. [Lecture #5](./lecture-5)
Object in JS, keyword "this" and keyword "new", Indirect functions invocation, prototype and homework assignment "LinkedList implementation in JS".
6. [Lecture #6](./lecture-6)
More on OOP in JavaScript: OOP in functional and in prototype styles, classes from ES6, object wrappers, modules (CommonJS and ES6 modules).
7. [Lecture #7](./lecture-7)
Modern JavaScript ecosystem: Node.js, npm, webpack (and bundling in general) and more on ES6 modules and how deal with them using contemporary tools.
8. [Lecture #8](./lecture-8)
Introduction to React: basic concepts and ideas, components approach, JSX and "state".
9. [Lecture #9](./lecture-9)
More on React: components lifecycle and it's hooks, handling events and displaying arrays of components.
10. [Lecture #10](./lecture-10)
Managing state in React application: reasoning about custom approaches then introduction to Redux and it's main concepts, and also intro to react-router and client-side routing.
11. [Lecture #11](./lecture-11)
Introduction to HTTP protocol and how to access server-side data in modern web application, intro to JSON, AJAX and fetch, and some thoughts about REST.
12. [Lecture #12](./lecture-12)
Building full-fledged application (like Twitter) using React, Redux and Firebase as a persistent storage, also introduction to Firebase.

## How to run examples

Most of the examples can be run just by opening corresponding HTML files, but examples from lectures 9-12 need an additional build steps (compiling using [babel](http://babeljs.io/)) before running, so you should execute the following:

- install all project dependencies

```sh
$ npm install
```

 - install [parcel](https://parceljs.org/) globally

```sh
$ npm install -g parcel-bundler
```

 - run parcel from the project root directory, passing specific HTML file as an input

```sh
$ parcel lecture-9/1-lifecycle-hooks/lifecycle.html
```
