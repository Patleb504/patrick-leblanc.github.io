/*
    LOOPS
        - Loops allow you to run the same code over and over again with a 
            different value
    
The For Loop:
** For Loops are used for running through an array.
The for loop has the following syntax:
for (let i = 0; i < array.length-1; i++) {
  // code block to be executed
}
let i = 0 //==> starting point of the loop.
i < array.length-1 //==> ending point of the loop
i++ //==> iterator that tells it to increment or decrement 
The For/In Loop:
The JavaScript for/in statement loops through the properties of an object.
Syntax
for(x in object) {
    *code block
};
    
The While Loop
The while loop loops through a block of code as long as a specified
condition is true. Used when dealing directly with boolean value
Syntax
while (condition) {
  // code block to be executed
}
    
    
*/

//Examples: 

 ///Using a for-loop to console.log the numbers 1-5 in reverse. loop backwards 
 //over array
//start: 5 ..... i = 5
//stop: 0 ...... i > 0; loop will run for all numbers greater than 0, and
//starting with 5
// increment.... i-- increments down by one

for(var i = 5; i >= 0; i--){
    console.log(i);
  }
  
  // prints ==> 5 4 3 2 1 0
  
  //Using for loop to loop through an array
  //start: 0
 //stop: end of array
     //use bracket notation to access 
     //and dot.length to determine end of array
 
  var colors = ["red","orange","yellow","green","blue"];
 
  for (var i = 0; i < colors.length; i++) {
   console.log(colors[i]);
  }
  
  //prints ==> red, orange, yellow, green, blue
  
  
  //Using a for- in loop to loop through an object
  
   var myObject = {};
 
  myObject.name = "PaT";
  myObject.city = "Metairie";
  myObject.favFood = "Tacos";
 
 console.log(myObject);
 
 // //Now create a for-in loop and print to the console all the keys and all 
 //  values from your object
 
  for (var key in myObject) {
    console.log(key);
   console.log(myObject[key]);
 }
 /*
 prints ==> 
 name
 Pat
 city
 Metairie
 favFood
 Tacos
 */