// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // int for loop to find values
  for(var i = 0; i <= array.length; i++){
    console.log(array[i]);                // test pass
  }

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // in for loop to loop backwards to print values
  for (var i = array.length - 1; i >= 0; i--)
  console.log(array[i]);                          // test pass
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // int new var with empty array to push keys into
  var arr = [];
  // int for in loop to lop over obj 
  for (var key in object){
    // use array method .push to form into array
    arr.push(key);                                  // test pass
   }
  return arr
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // int for in loop to loop obj and print keys to console
  for (var key in object){
    console.log(key);                                      // test pass
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // int a var with empty array
  var newArr = [];
  // use for in loop to loop through object 
  for (var key in object){
    // push values into empty array newArr
    newArr.push(object[key]);                                // test pass
  }
  return newArr
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // int for in loop to loop over obj and print its values
  for(var key in object){
    console.log(object[key]);                     // test pass
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // int var of empty array 
  var arr = [];
  // int for in loop to return the number of key/value pairs in object
  for (var key in object){
      arr.push(key);
  }
  return arr.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // int an empty array
  var arr = [];
  // use for in loop to get values || how to loop in reverse
  for (var key in object){
    // push object values into array
    arr.push(object[key]);
  }

  console.log(arr.reverse().join(' '));
 
 
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
