/*
* DATA TYPES:
*
* 0. Variables can hold different types of data types:
*       - Numbers
        - Strings
        - Booleans
        - Arrays
        - Objects
        - Functions
        - undefined
        - null
        -NaN
*/ // NOTE: Some of these data types are considered 'complex' while others
//'primitive'

/* 1. Numbers
        - In JS, numbers are just that: numbers. 
        - They are simple data types
        - They can be written with or without decimals 
        - You can add and compare numbers with operators 
        (we will discuss operators in a another section )
*/
    // Example:
    var x = 5 ;
    var y = 6;
    
    console.log(x + y); // ==> prints 11
    console.log(5 +6);  // ==> prints 11
    
/* 2. Strings
        - Strings are formed by using single ' ' or double " " quotes 
            wrapped around a character(s).
        - You can use quotes within a string as long as they don't match
            the outer quotes
        - Strings can also be added together, or concactenated.
        - To find a strings length you can use the .length property
        
        - strings are useful for holdind data represented in text form
        
        - to access specific characters within a string you can use a process
            called indexing
        - strings are zero-indexed which means each character within a string 
            has it's own location or address
*/

//Examples:

// . Length
var stringOne = "Hello";
stringOne.length;
console.log(stringOne.length); //==> prints 5

// Concactenate strings

var stringTwo = 'World';
console.log(stringOne + " " + stringTwo); // prints ==> Hello World
/*NOTE: notice you had to manually insert a space between stringOne and 
    stringTwo using " ". If not, HelloWorld would have been logged. */

// Indexing strings
// a strings index begins with the first character at 0. 
// to access, you can use bracket[notation] ///(syntax)

console.log(stringTwo[0]); //==> prints W to the console


/* 3. Booleans
        - Booleans are true or false values
        - everything with a value is considered truthy
        - everything without a value returns falsy
        
        - comparison operators > < = are used with booleans to return true or
            false values
        
        - the booleans true and false do not need to be put in string because 
            they are apart of the JS program
*/

//Example:
var j = true;

(5 > 4) // true value

/* 4. Arrays
        - array literal is a complex data types to store multiples data types 
            - syntax =
            // [ ];
        - arrays are zero indexed
        - arrays can include numbers, strings, booleans, arrays, objects,
            and functions
        - arrays are considered a list or collection
*/
//Example:
var myArray = [];
myArray = ['Patrick', 26, true, ['LeBlanc', true]];

//use bracket notation to access certain values
myArray[2]; // = true
myArray[3]; // = ['LeBlanc', true];
//use double bracket notation to access the array within the array
myArray[3][0]; // = LeBlanc


myArray.length; // 4

/* Arrays (cont.)
    - Arrays can be altered using functions such as:
            - .push() : adds value(s) to the end of an array
            - .unshift() : adds value(s) to the beginning of array
            - .pop() : removes a value from the back of array
            - .shift() : removes a value from the front of array
            - .join() : concatenates all elements in array
*/
//Example:
//.push()
myArray.push('Hello'); 
// myArray = ['Pat', 26, true, ['LeBlanc', true], 'Hello'];

//.unshift()
myArray.unshift(100); 
// myArray = [100, 'Pat', 26, true, ['LeBlanc', true], 'Hello'];

//.pop()
myArray.pop(); 
// myArray = [100, 'Pat', 26, true, ['LeBlanc', true]];

//.shift()
myArray.shift(); 
// myArray = ['Josh', 26, true, ['LeBlanc', true]];

//.join()
myArray.join(); 
// "pat, 26, true, LeBlanc, true"


/* 5. Objects
    - Another type of collection... a complex data type
    - However, unlike arrays, values inside objects are not 
        ordered nor they have an index
    - objects are collections of key/value pairs
    - syntax: { };
    - objects are better for categorizing information, whereas arrays 
        is just one line of data group together
    - you can use bracket and dot notation to access key/value pairs
*/
//Example:
var myObject = {
    firstName: 'Pat',
    age: 26,
    male: true,
    lastName: ['LeBlanc', true]
};

/// key: value (*object keys are actually strings*)

//Accessing values in objects
//dot.notation
myObject.firstName; // Pat
myObject['male']; // true

//Adding values in objects
//use dot.notation and bracket[notation] to add values/ keys to objects!
myObject.hometown = 'Metairie'; 
myObject['fromLouisiana'] = true;
/* var myObject = {
    firstName: 'Pat',
    age: 26,
    male: true,
    lastName: ['LeBlanc', true]
    hometown: 'Metairie'
    fromLouisiana: true
};
*/

/* 6. Functions
    - a computer program is a set of instructions that we give to the computer
    - functions allow us to execute a block of code whenever and however we want 
    - makes coding more efficient 
    
    2 Stages in Creating a Function:
        i. function declaration / defintion
        ii. function call/ invocation / execution
        
        
    -Function Declaration
            - creates the action or instructions
            - not putting concrete values in declaration allows multiple 
                value possibilities
            - parameters serve as placeholders 
            
            syntax:
            function add (num1, num2){
                return num1 + num2
            }
            
            function = keyword
            add = function name (can be anything but better to make it
            specific to action of the function)
            num1, num2 = parameters ("  "   "    "    "      ")
            
    -Function Call
            - since parameters are just placeholders we must invoke or call 
                our function with values
            
            syntax:
            add (5,5) //10
            
            5,5 = placeholders (arguments take the place)
        
*/
// Example:

function subtract (num1, num2) {
    return num1 - num2;
}

subtract(10,5); // output = 5

/* 7. Undefined
        - just that, undefined. can be given to a variable
   8. null
        - value of null represents the intentional absence of a value
  
   
   9. NaN
        - 'Not a number'
        - rarely used but may be returned if a value is not a number
        
   10. infinity vs -infinity
        - infinity is a value within the program that acts as does the
            mathematical value of infinity. 
        - a negative infinity (-infinity) is the opposite equivalent
        
   11. By copy vs By reference
        -Variables that are assigned a non-primitive value are given a 
            reference to that value. That reference points to the object’s 
            location in memory. The variables don’t actually contain the value.
        -When a reference type value, an object, is copied to another variable 
            using =, the address of that value is what’s actually copied over 
            as if it were a primitive. Objects are copied by reference instead 
            of by value.
*/

// Example: Undefined
var pat;

console.log(pat); // prints ==> undefined

// Example: null

var pat2 = null;

console.log(pat2); // prints ==> null

var pat3 = null;

console.log(pat3 + 5); // prints ==> 5

// Example: NaN
0/0; // prints ==> NaN

// Example: Infinity, -Infinity

Infinity + Infinity; // prints ==> Infinity

1 / -0; // prints ==> -Infinity

// Example: Copy by value, copy by reference
// by value:
var variableOne = 75; // copy by value;

//by reference:
var myName = {};
function myNameIs(aName){
  aName.firstName = "pat";
}
myNameIs(myName);console.log(myName); // Object {firstName: "Josh"}