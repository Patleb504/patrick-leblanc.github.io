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
    // int 2 var outPut1 & outPut2 with empty []
    var outPut1 = [];
    var outPut2 = [];
    // use for loop to loop through 1param
    for(var i = 0; i < start.length; i++){
        outPut1.push(start[i]);
    }
    for(var i = 0; i < end.length; i++){
        outPut2.push(end[i]);
    }
    // int if else to compair and return range 
    if (outPut1 > outPut2){
        return range(end, start);
    } else{
        return range(start, end);
    }
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}
console.log(range(1, 5));




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
