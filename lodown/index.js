'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Function takes in an input value and returns the input value unchanged.
 * 
 * @param {Any Value} value: Function takes in any value;
 * @returns {Any Value}: Function returns input value unchanged;
 */

_.identity = function(value){
    return value;
}

module.exports.identity = identity;


/**
 * typeOf:
 * 
 * @param {*} value 
 * @returns 
 */
_.typeOf = function(value){
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

module.exports.typeOf = typeOf;


/**
 * first
 * 
 * @param {*} array 
 * @param {*} num 
 * @returns 
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

module.exports.first = first;

/**
 * last:
 * 
 * @param {*} array 
 * @param {*} num 
 * @returns 
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

module.exports.last = last;

/**
 * indexOf:
 * 
 * @param {} array 
 * @param {*} value 
 * @returns 
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

    module.exports.indexOf = indexOf

/**
 * contains:
 * 
 * @param {*} array 
 * @param {*} value 
 * @returns 
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
    module.exports.contains = contains;
/**
 * each:
 * 
 * @parm {*} array
 * @pram {*} value
 * @returns
 * 
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

    module.exports.each = each;

/**
 * unique:
 * 
 * @parm {*} array
 * @pram {*} value
 * @returns
 * 
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

module.exports.unique = unique;

/**
 * filter:
 * 
 * @pram {*} array
 * @pram {*} value
 * @returns 
 * 
 */


    



