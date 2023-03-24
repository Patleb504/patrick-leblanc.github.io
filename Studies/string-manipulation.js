/*
 STRING MANIPULATION
 
 - with operators
 - with string methods
In JS, you have the ability to manipulate strings with operators and 
string methods.
Operator
* concatenation operator (+), adds two sets of strings togther and 
    returns a new string. 
String Methods
* JS has function programmed to execute certain methods. With strings 
    you have the opportunity manipulate in many ways
*/

//Examples:

//operator:
    
var stringOne = "Hello friends"
var stringTwo = "How are you doing?"

console.log(stringOne + ", " + stringTwo);
//==> prints: Hello friends, How are you doing?

// The shorthand assignment operator += can also be used to concatenate strings.
// adds and assigns

stringOne += stringTwo;
// same as:
stringOne = stringOne + stringTwo;

//String methods:

//indexOf() - returns index (position) of a string

console.log(stringOne.indexOf("friends")); //==> prints: 6

//slice() - pulls a part of a string and returns that part in a new string
        // takes the start and end position (end not included)
        
    
var sliceString = "Talking with my friend.";
console.log(sliceString.slice(13,22)); //==> prints 'my friend'

//.toLowerCase()

console.log(stringOne.toLowerCase()); //==> prints 'hello friends'

//.toUpperCase()

console.log(stringTwo.toUpperCase());//==> prints: 'HOW ARE YOU DOING?'

//concat() - rather than using an operator + to concat strings, 
// you can use the concat method

console.log(stringOne.concat(", ", 'How are you doing?'));
//==> prints: Hello friends How are you doing?