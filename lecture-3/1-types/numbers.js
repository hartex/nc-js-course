// numbers can be between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER 

Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;

// divide by zero -> Infinity
112 / 0;
Number.isFinite(2);

// NaN
"dsfsdf" / 2;
NaN === NaN;
Number.isNaN(NaN); // or just isNaN()

// note space between method and number
2.33423 .toFixed(3);
2.33423 .toExponential();
2.33423 .toString();

parseInt("1231.21");
parseFloat("1231.22");

0.1 + 0.2 == 0.3 // WAT
// it happens cause 0.1 is infinite fraction in binary 

// useful methods from ES6
Number.isInteger(0.2);
Number.isSafeInteger(222) ;

// Math object - contains useful math operations
// all its methods and properties are static
Math.PI;
Math.E;

Math.pow(2, 4);
Math.floor(232.33);
Math.random(); // pseudo random number generator 