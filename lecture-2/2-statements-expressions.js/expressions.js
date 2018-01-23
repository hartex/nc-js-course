/*
 -- expressions:
*/
expression;

/*
examples of expressions:
*/
zzz; // -- reference to a variable
1 + zzz; // -- arithmetic operation
func(1, zzz); // -- function invocation 
33333; // -- number literal

/* 
both leads to the same result
but first one is a statement 
*/
var x;
if (y >= 0) {
    x = y;
} else {
    x = -y;
}

/* 
and second one is expression
*/
var x = (y >= 0 ? y : -y);