// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    // int if chain to determain data type and return as string
    if (typeof value === 'string'){
        return 'string';
    }else if (Array.isArray(value)){
        return 'array';
    }else if (value === null){
        return 'null';
    }else if (typeof value === 'number'){
        return 'number';
    }else if(typeof value === 'object'){
        return 'object';
    }else if(typeof value === 'function'){
        return 'function';
    }else if(typeof value === 'boolean'){
        return 'boolean';
    }else if(typeof value === 'undefined'){
        return 'undefined';
    }
}
console.log()


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num){
    // determan if array is an not an array 
    if (!Array.isArray(array)) {
        return [];
    }  
    // determan if num is not given or not a number
    if(num === undefined || num === NaN){
        return array[0];
    } 
    // if num is less than 1(negative) return empty array
    if (num < 1){
        return [];
    }
    // if num is greater than the length of array return the array
    if (num > array.length){
        return array;
    }
    // if num is less than or equal to the array length
    if (num <= array.length){
        let arr = [];
        for(let i = 0; i < num; i++){
            arr.push(array[i]);
        }
        return arr;
    }
    
    


}



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){
    // determan if array is an not an array 
    if (!Array.isArray(array)) { //condition checks if the array is not an array
        return []; // returns an empty array literal
    }
     if (isNaN(num) || num === null) {// condition checks if number is not a number or no value 
     return array[array.length-1]; // return first element of array
    } else if (num < 0) { // if number < 0 (negative)
        return [];
    } else if (num > array.length) { // if number is greater than the arrays length, return array;
        return array;
    } else if (num) {
           return array.slice(array.length - num, array.length); // returning the last number of array
  }
 
}





/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


_.indexOf = function(array, value){
// int for loop to find if value is inside of array
for(let i = 0; i < array.length; i++){
    if(array[i] === value){
// return index of array if value is in array 
        return i;
    } 
}
// pop out of for loop to return -1 if value is not found in array
    return -1;
}




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    // let bool = false
    let bool = false;
    // int for loop to check array
    for( let i = 0; i < array.length; i++) {
        if(array[i] === value){
            return bool = true;
        }
    }
    return bool;

}




/** _.each    // array.forEAch() method
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
// determine if collection is an array
 //determine if collection is an array
 if (Array.isArray(collection)){ //determine is Array.isArray(collection) is truthy
    //iterate using for loop
    for (let i = 0; i < collection.length; i++){
        //invoke function on the current element, current index, and the collection itself
        func(collection[i], i, collection);
    }
} else {    //else it's an object
    //iterate through object
    for (let key in collection){
        func(collection[key], key, collection);
    }
}
}





/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array){
    // int new var and assign it to a [];
    let newArray = []; 
    for (let i = 0; i < array.length; i++) //loop through array 
   if ( _.indexOf(array, array[i]) === i) { //use indexOf() to locate values in array that are duplicates
        newArray.push(array[i]); //push values to newArray
        
    }
  return newArray;
}




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, func){
    let newArr =[];
   
    _.each(array, function(element, index, array){
            if (func(element, index, array)) {
                newArr.push(element);
            }
            
   });

   return newArr
   
}





/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){  // similar to the filter function

    let newArr = _.filter(array, function(element, index, collection){
        return !func(element, index, collection); //if func does not share elements with new function, return those elements in falsy array
       
     });
     
     return newArr;
     

}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


_.partition = function (array, fun) {
  
    var newArr =[];
    
    var truthyArr = _.filter(array,fun);
  
    var falseyArr = _.reject(array,fun);
  
   newArr.push(truthyArr); // push truthy and falsy arrays into newArr
   newArr.push(falseyArr);
  
  return newArr;
  };
  








/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, aFunction) {

    var newArray = [];
    
     _.each(collection,function(element, index, collection) {
      
         newArray.push(aFunction(element,index, collection));
    });
        return newArray;
    };





/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (arrayOfObjects, property) {
   
	
    return	_.map(arrayOfObjects, function(element) { 
         return  element[property];
    });
    
    
    
    };





/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    // determine if func did not recive a value
    if(!func){
        // determaine if function is an array
        if(Array.isArray(collection)){
            // int for loop to iterate
            for (let i = 0; i < collection.length; i++){
            // determane if current value is NOT truthy
            if(!collection[i]){
                return false;
            }
            }

        } else { // else its an object 
            for (let key in collection){
                // determaine if current value is NOT truthy
                if(!collection[i]){
                    return false;
                }
            }

        }
        // else its an object
    } else {
    // determine if its an array
        if(Array.isArray(collection)){
        // use for loop to lierate
        for (let i = 0; i < collection.length; i++){
            // determane if the result of invoking test function on current element, index,and collection is NOT truthy
            if(!func(collection[i], i, collection)){
                return false;
            }
        }
        }else { // collection
        // determine if invoking test function on current value, key, and collection is NOT truthy
        for (let key in collection){
            if(!func(collection[key], key, collection)){
                return false;
            }
        }

        }
        
    }
    // determaine if function is an array
    return true;

    // else its an object
}




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


_.some = function(collection, aFunction) {
       
    let onePass = false;
    aFunction = aFunction || _.identity;
 
  _.each(collection, function(e,i,c) {
    if(aFunction(e,i,c)) {
     onePass = true;
     } else if (aFunction(e,i,c)) {
        onePass;
     }
  });
 
  return onePass;


};



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// methods used  map filter reduce each = forEach


_.reduce = function(array, func, seed){
    let previousResult;
    //if there is a seed
    if(seed !== undefined){
         previousResult = seed;
        // use each to gain access to each value in the array
        _.each(array, function (e,i,a){
            //calling functin for every element, passing in previous result, element, index
           previousResult = func(previousResult, e, i,a);
        });
    }else {
        // use the first element of the array as the seed
         previousResult = array[0];
        // implement a loop to start iterating at my first index
        for (let i = 1; i < array.length; i++){
          previousResult = func(previousResult, array[i], i, array);
        }
    }
// return my previous result variable
return previousResult;
    // if there is no seed
};






/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/




_.extend = function (obj1,obj2,...obj) {
  
    // use Object.assign method to copy values from one object to the other
   return Object.assign(obj1,obj2,...obj);
    
  };


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
