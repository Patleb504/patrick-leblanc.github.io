
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) { // x = number of rows for output triange
  // int var to rep our #
  var hash = '#'; 
  // int while loop to help add our # in rows 
  while (hash.length <= x){
    //log on each literation to print #
    console.log(hash);
    // add 1 # on each literation
    hash += '#';
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
// int for loop to loop through numbrs 
for (var i = 1; i <= 15; i++){

  // int if chain to log fizz buzz or number to console.
  // check % 3 and 5 for 1st if
   if(i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz');
   } else if (i % 3 === 0){
    console.log('fizz');
   } else if (i % 5 === 0){
    console.log('buzz');
   }else {
     console.log(i);
   }
 }
}
//console.log(fizzBuzz(20)); looks good 

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(parm) { // parm = number rows and colums of a chessboard

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
