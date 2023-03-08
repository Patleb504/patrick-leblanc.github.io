// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
      // int var outPut1 with empty []
   var outPut1 = [];
   // int for loop to loop through prams
   for(var i = start; i <= end; i++){
    outPut1.push(i);
}
   // int a conditional statement to find which for loop to use (if first arg is > then senond return in reverse)
   if(start > end ){ 
    // return outPut1 in reverse
    return outPut1.reverse();
   } else {
    return outPut1;
   }

    // YOUR CODE GOES ABOVE HERE //
}
console.log(range(5, 1));
console.log(range(1, 5));





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
