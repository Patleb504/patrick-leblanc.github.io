////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(numOne, numTwo) {
  // Math.min() - finds the minimum of the 2 inputs
return Math.min(numOne, numTwo);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
// base to check in num is even or odd
if(num === 0){ // 0 is even 
  return true;
}
if (num === 1){
  return false;
}
// recursion 
if(num < 0){
  return isEven(-num);
} else{
  return isEven(num - 2);
}

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {
  // let count start at 0
  let count = 0;
  // int for loop to toop str
  for(let i = 0; i < str.length; i++){
    // int if chain to check if char is in  str
    if(str.charAt(i) === char){
      // count + 1
      count++;
    }
  }
  // out of for loop return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
  var count = 0;
  // int for loop through str length.
    for (var i = 0; i < str.length; i++) {
      // check if str is === 'b'
        if (str.charAt(i) === "B") {
            count++;

        }
    }
        return count; 

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
