// to string conversion can be done with String wrapper 
// or '+' binary operator when one of the operand is string:
console.log(String(2131));
console.log(true + '123');
console.log(123 + '123');

// to number conversion can be done with Number wrapper or unary '-'
// conversion take place in math operations and when comparing values with different types
console.log(123 == '123');
console.log(1 == true);
console.log("1" == true);

console.log(Number('123'));
console.log(+'123');
console.log(+undefined);
console.log(+false);
console.log(+'    222  ');

// to boolean conversion done in logic context like if(value) or with logical operators
// or can be done explicitly with !! or Boolean()
console.log(true == 1);
console.log(true <= 1);
console.log(!!'');
console.log(Boolean(0));