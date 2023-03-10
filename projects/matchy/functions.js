/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// int function with 2 params
function search(array, str){
// int for loop to loop through an array 
for (var i = 0; i < array.length; i++){
    if(array[i].name === str){
        return array[i];  
            
    } 
} 
  return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare funct with 3 parms array, string, and obj sould replace an animal obj 
function replace(array, str, obj){
    // int new {} if needed to replace 
    
    for (var i = 0; i < array.length; i++){
        if (array[i].name === str) {
             array.splice(i, 1, obj);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, str){
    //int for loop to find match 
    for (var i = 0; i < array.length; i++){
        if (array[i].name === str){
            array.splice(i, 1, );
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// int add function with 2 parsm 
    function add(array, obj){
        for (var i = 0; i < array.length; i++){
            if ((array[i].name !== obj.name) && (obj.name.length > 0) && (obj.species.length > 0)){
                    
            } 
            
        }
       
    }   


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
