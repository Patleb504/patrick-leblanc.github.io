/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use
* variables.  Variables are named identifiers that can point to values of a 
* particular type, like a Number, String, Boolean, Array, Object or another 
* data-type.  Variables are called so because once created, we can CHANGE the 
* value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name 
*    (id or alias) for our variable.
*
* 2. There are 2 phases of using variables: declaration and 
*     initialization (or assignment).
Scope of variables: 
var declarations are globally scoped or function/locally scoped. It is globally
scoped when a var variable is declared outside a function. This means that any
variable that is declared with var outside a function block is available for use
in the whole window. var is function scoped when it is declared within a 
function. This means that it is available and can be accessed only within that 
function.
let is block scoped
const declarations are block scoped
*/

// 1. declaration //
var myName;


/*
* At the declaration phase, the variable myName is undefined because we have 
* NOT initialized it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable
//- we cannot do this with constants 
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. Variables can also be declared using let & const
// let can be reassigned
//const can not be reassigned
let firstName = 'Patrick';
const lastName = 'LeBlanc';

// NOTE: We console.log let & const variables the same way as with var
console.log(firstName); // prints ==> Patrick
console.log(lastName); // prints ==> LeBlanc

/* 5. Hoisting Variables
* In JS, all variable declarations are moved to the top of the current scope.
* This is called hoisting. Hoisting allows a variable to be declared once 
*  it's been used or used before it has been declared. 
* the code block is taken to the top when hoisted (var). Howver, let and const
* can't be hoisted the same as var. 
*/

// Example:
x = 10; // 10 is assigned to x

console.log(x + 5); // prints ==> 15

var x; // x is declared

// OR

var y;
y = 10;

console.log(y + 5); // prints ==> 15