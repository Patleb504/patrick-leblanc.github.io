////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let array = [];
  if(start === end){
   return array;//if start and end are equal to each other return an empty array
 }
  if (step === undefined){  //if undefined make step equal 1
  step = 1;
}
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {  // deciding which way the range will face
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array; // return array
  
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arrOfNum) {
  var sum = 0;
  for(let i = 0; i < arrOfNum.length; i++) {
    sum += arrOfNum[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let reversedArr = [];
// int for loop in reverse
  for(let i = arr.length-1; i >= 0 ; i--) {
   reversedArr.push(arr[i]); 
  }
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // int for loop usin Math.floor will give you largest num less then or = to given num
  for ( let i = 0; i < Math.floor(array.length / 2); i++) {
    let xArray = array[i];
    
    array[i] = array[array.length - 1 - i];
    
    array[array.length - 1 - i] = xArray;
  }
    return array; 
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  // iterate through input array
  for (let i = array.length - 1; i >= 0; i--) {
    rest = {value: array[i], rest: rest};
  }
  
  return rest;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
// base 
if(list.rest === null){
  array.push(list.value)
  return array;
}
// recursion 
  // grab 'value' at value property and add to array
array.push(list.value); // [10]
  // return function call on reset of object
return listToArray(list.rest, array)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, item) {

  let newList = {
    value: value,
    rest: item
  };
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  var listArray = listToArray(list);
  return listArray[num];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {

if (a === b) return true;
  //second if statement checks for null values and non-objects
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  //declare counters
  var propsInA = 0, propsInB = 0;
	//for-in loop counts the number of properties in a and b
  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    //if b has a prop not in a or if, upon recursive function all,
    //the properties don't have the same values, return false
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
	//otherwise, return whether the number of properties are the same
  return propsInA == propsInB;




}
// console.log(deepEqual('a', 'a')); // true
// console.log(deepEqual(1, 2)); //false
// console.log(deepEqual({a: 1}, {a: 1}));// true
// console.log(deepEqual({a: 1}, {a: 2})); // false

// console.log({a: 1} === {a: 1});



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
