/* 
 -- statements:
 */
statement; 
statement;

/*
can be with or without semicolon
*/
statement
statement

/*
 -- empty statements:
*/
;;;;

/*
 -- block statement:
*/
{
    statement; 
    statement;
}

/*
parsed as block statement but you can consider it as an object literal 
(an expression that produces an object)
*/
{
    declaration: variable
}

/*
but this works fine:
*/
({
    declaration: variable
})
