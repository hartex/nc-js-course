/**
 * Console and Logging
 *
 * @see {@link https://developer.mozilla.org/ru/docs/Web/API/Console|MDN Console}
 * @see {@link https://habrahabr.ru/post/114483/|Good article about console capabilities}
 * */
console.log("Hello World!");

/* any number of arguments */
/* var f = 3132;
console.log(window, document, f, 11); */

/*
* printf like functionality using string substitutions
* %o or %O	is for JS object.
* %d or %i	is for integer.
* %s	    is for string.
* %f        is for floating-point numbers.
* */
/* console.log('Global object is %o, there is also a variable f=%d and number %f', window, f, 11.22); */

/* we cant also use arguments by is's number */
/* console.log('%1$d + %1$d = %d', 10, 20); */

/* additional logging methods */
/* console.info('Just info');
console.warn('Warning');
console.error("Error!"); */

/* methods to display object with it's properties or DOM node */
/* console.dir(document.documentElement);
console.dirxml(document.documentElement); */

/* function compute() {
    let result = 0;
    for (let p = 0; p < 100000; p++) {
        result += Math.pow(p, 2);
    } */
    /* writes call stack to the console */
/*     console.trace();
    console.log('Computing result is ', result);
} */

/* allows making computation mesuarments */
/* console.time('Computation');
compute();
console.timeEnd('Computation'); */

/*
* logs info about allocated memory space and all available memory
* works only in Chrome
* */
/* console.log(console.memory); */
