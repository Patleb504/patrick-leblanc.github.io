// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    // return a function with parm value 
    return function(value){
        // return value is greater then the base
        return value > base;                                    // test pass
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with a value as parm
    return function(value){
        // return value is less than base
        return value < base;                                            // test pass
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a function to test if String starts with startWith char
    return function string(test){
        // int if esle chain to determan string(parm)[0] === starts with  if true or false 
        if(test[0].toUpperCase() === startsWith){
            return true ;
        } else if (test[0].toLowerCase() === startsWith){
            return true;
        } else {
            return false;                                                       // test pass
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // int return function to compare if new func.length -1 === endsWith
    return function string(test){
        // use if chain with .length to find if last letter is ===
        if (test[test.length - 1].toUpperCase() === endsWith){    
            return true;
        } else if (test[test.length - 1].toLowerCase() === endsWith){
            return true;
        }else {
            return false;                                               // test pass
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {       // modfiy is a function internal
    // YOUR CODE BELOW HERE //
    // int a collection for results
    let result = [];
    // use for loop to loop array of strings
    for(var i = 0; i < strings.length; i++){
        // pussh modify with parm string[i] to result
         result.push(modify(strings[i]));  

    }
        return result;
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {  // test is function // test => function that returns true/fasle
    // YOUR CODE BELOW HERE //
    // int for loop to loop strings 
    for(var i = 0; i < strings.length; i++){

    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
