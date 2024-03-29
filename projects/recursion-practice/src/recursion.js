// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
// base
  if (n === 0) {
    return 1;
// edge cases 
  } else if (n < 0){
    return null;
  }
// recursion
  return n * factorial(n - 1);
};

/* 
 base false
 recursion 
 return 5 * factoral(4)



*/



// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
// base 
if (array.length === 0){
  return 0 
}


// recursion
 return array[0] + sum(array.slice(1))
  
};

/*
// base false 
// recurrsion => 1 + sum([2,3,4,5,6])
base = false 
recursion => 2 + sum([3,4,5,6])
base = false 
recursion => 3 + sum([4,5,6])
base =false 
recurison => 4 + sum([5,6])
*/


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {

  // check if number is negitave first
  if (n < 0){
    // base case
    if(n === 0){
      return true
    }
    if(n === 1){
      return false
    }
    //recursion 
    return isEven(n + 2)
// if not negitave check if possitave 
  } else {
    if (n === 0){
      return true
    } else if (n === 1){
      return false 
    }

  }

  // recurison
  return isEven(n - 2);

};







// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

// check if n is negitave
if (n < 0){
// base case  for negitave n 
  if (n === 0){
    return 0;
  }
// recurison
  return n + 1 + sumBelow(n + 1);


// // if not a negitave number
} else{
  // base for possitive n 
  if (n === 0){
  return 0;
  }
}
// recursion
return n - 1  + sumBelow(n - 1);

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  // int result var
  let result;
  // base case
  if (x + 1 === y){
    return output
  }
  if (x === y){
    return output;
  }
  if(x === y + 1){
    return output;
  }

  // recursion
  if(y > x){ 
    output.unshift(y - 1);
    result = range (x, y - 1, output)
    } 
  
    if (x > y){
    output.push(x - 1);
    result = range (x -1, y, output);
    }

  
  return result

   
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, total=1) {
  // base 
  if (exp === 0){
    return total 
  }

  // recursion
  if (exp < 0){
    total /= base;
    return exponent(base, exp + 1, total);
  }
  total *= base;
  
  return exponent(base, exp - 1, total)

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
// output should be a boolean value
  // base case:
  // if number is 1, return true
  if(n === 1) {
    return true;
  } else if (n < 1){ // account for anything below 1, negatives
    return false;
  } else { //return recursiveky
  return  powerOfTwo(n/2);
}

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base case:
// if there is nothing, return string
if(string.length === 0) {
  return string;
}
// return string, using bracket notation, access the last character of string
// and a recursive call and slice string so we lose a character every time
return string[string.length - 1] + reverse(string.slice(0,string.length-1));
  

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // output: booleans
// base case 
// is there is nothing in the string or the string only has one character, return true
if (string.length === 0 ||string.length === 1) {
  return true; 
} else {
if (string[0].toLowerCase() !== string[string.length-1].toLowerCase()) {
  return false; // checks that the first characters and last character dont equal one another
} else {
  return palindrome(string.substring(1,string.length-1).replace(/\s+/g, '')); // use substring to get new string
}

}

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {

  if(y === 0 || x === 0){
    return 0;
  } 
  if(y < 0){
    return -x + multiply(x, y + 1);
  
  } else {
  
  return x + multiply(x, y - 1 );
  } 

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

   // base case
  // if there are nothing in the strings, return true
  if(str1.length === 0 && str2.length === 0){
    return true;
  }// if first element of each string are equal, return recursive function . slice to alter string
    if(str1[0] === str2[0]){
  return compareStr(str1.slice(1), str2.slice(1));
}
    return false;

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){
  // base 
  if(str.length === 0){
    return output;
  }

  // recursions
  output.push(str[0]);
  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array
var reverseArr = function (array, output= []) {
  // base 
  if(array.length === 0){
    return output;
  }
  // recursion
  output.push(array[array.length-1])
  return reverseArr(array.slice(0, array.length -1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) {
// base
if(output.length === length){
return output;
}
// recursion
output.push(value);
return buildList(value, length, output);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output=0) {
// base
if (array.length === 0){
  return output;
}

// recursion
if (array[0] === value){
  output++
}
return countOccurrence(array.slice(1), value, output)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
// base 
if (array.length === 0){
return output;
}

// recursion
output.push(callback(array[0]));

return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
// base
if(n === 0){
return 0;
}
if(n <= 0){
  return null;
}
if (n === 1){
  return 1;
}

// recursion


return nthFibo(n - 1) + nthFibo(n - 2); 
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  // base 
  if(input.length === 0){
    return output;
  }
  output.push(input[0].toUpperCase());
  // recursion
return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  // base
  if(array.length === 0){
    return output;
  }

  // recursion
  output.push(array[0][0].toUpperCase() + array[0].slice(1));
  return capitalizeFirst(array.slice(1), output)


};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
// base
if(str.length === 0){
  return obj;
}

// recurison
if (obj[str[0]] === undefined){
  obj[str[0]] = 1
} else {
  obj[str[0]]++
}
return letterTally(str.slice(1), obj);

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output =[]) {
// base 
if(list.length === 0){
  return output;
}
// recursion
if(list[0] !== list[1]){
  output.push(list[0]);
}
return compress(list.slice(1), output);

};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, newArr = []) {
   // base case 
   if (array.length === 0) { return newArr }
   // if the first element if the array does not equal 0, push that element into the new array
     if (array[0] !== 0) {
         newArr.push(array[0]);
         return minimizeZeroes(array.slice(1), newArr); // return statement;
     }
     
     if (array[0] !== array[1]) {
         newArr.push(array[0]);
         return minimizeZeroes(array.slice(1), newArr);
     }
     return minimizeZeroes(array.slice(1), newArr); 
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
// base case
if (array.length === 0) { 
  return array;
 }

if(array[0] < 0) {
   array[0] = -array[0];
   } // if first element is less than 0, reassign first element to a negative
if(array[1] > 0){ 
  array[1] = -array[1]; 
} // if second element is greater than 0, reassign second element to a negative

return [array[0], array[1]].concat(alternateSign(array.slice(2))); // return statement;

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //base case: lenght of a string
  if (str.length === 0) return '';
  // recursion no tail rec, result of the function call, substring of an string 
  var tempStr = numToText(str.substring(0, str.length-1));
  var replace;
  // use a switch to replace the numerals witth strings
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
