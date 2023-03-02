// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // int if chain to determan if value is an array 
    if (Array.isArray(value)){
        return true;
    }else {
        return false;                  // test pass
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) { //{a: 1, b: 2}-- true  //null new date()--false
    // YOUR CODE BELOW HERE //
// typeof operator 
    if(typeof value === {a: 1, b:2} && !null && ![] && !new Date() && !1 && !"string" && !boolean){
                return true;
    } 
        return false;
    }


    // int if chain to determan if value is an object return true or false
    // if(object.isObject(value)){
    //     return true;
    // }else {
    //     return false;
    // }
    
    
    
    // YOUR CODE ABOVE HERE //
// }

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) { // [ ] or is it an { }
    // YOUR CODE BELOW HERE //
    // is it an array || is it object?
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {     // identify array null and date object 
    // YOUR CODE BELOW HERE //
// typeof value ===> 'string data type'
    // return string value
    return String(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
