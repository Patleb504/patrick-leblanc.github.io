//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const { slice } = require("lodash");

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let array = Object.values(object);
    
    for(let i = 0; i <= array.length-1; i++) {
        if (typeof array[i] !== 'string') {
           array.splice(i,1);
        } 
           
        }  
        console.log(array);
            
    return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let capWord = string.charAt(0).toUpperCase() + string.slice(1);
    return capWord;
    

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let arr = string.split(' ');
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let greeting = 'Welcome ';
    
    return greeting + object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + '!';
     

}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let sentence = ' is a ';
    
    return object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + sentence + object['species'].charAt(0).toUpperCase() + object['species'].slice(1); 
    

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises' 
function maybeNoises(object) {
// int if chain to check if noises arr is in object 
    // check if noises is undefined
    if (object['noises'] === undefined) {
        return 'there are no noises';
    } // check if noises contains anything
    else if (object['noises'].length === 0) {
        return 'there are no noises';
        // check if noises is an arr in the object
    } else if (Array.isArray(object['noises'])) { 
        return object['noises'].join(' '); 
    }

// the order of your conditions matters, you must rule out that there are no noises before returning the noises array
      
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// determain if string of words has word in it 
// int new var to hold sting of words as array
 let strArr = string.split(' ');
 // int for loop to see if string of word has word in 
 for (let i = 0; i < strArr.length; i++){
    if(strArr[i] === word){
        return true;
    }
 }
// return false if string does not contain word
return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // add name into objects friends array
    object['friends'].push(name);
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // int if chain and access object friends prop
    if(object.friends) {
        // if true use for loop to loop through friends array
        for(let i = 0; i < object.friends.length; i++) {
            // inside for loop int if statement to check if friends === name return true
           if (object.friends[i] === name) {
               return true;
           }
        }
        
    }
    // return false outside of chain/ for loop 
   return false;
   
   
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   // two new arrays must be declared to fill later on
    let rejectArray = []; 
    let result = [];
    
    
    // use a for loop to loop through the array that was given in parameter of function
    for(let i = 0; i < array.length; i++) {
       if(array[i].name === name) { // if name in array === name in paramter, set array[i] equal to a variable current
       var current = array[i];
       } else {  // if returns as false push name into reject array
           rejectArray.push(array[i].name);
     }
    } 
   
       if(current === null) {
           return rejectArray; // if current === null, return rejectArray
       }
       for(var i = 0; i < rejectArray.length; i++) { // use for loop to loop through rejectArray
           if(current.friends.indexOf(rejectArray[i]) == -1) {
               result.push(rejectArray[i]); // push names into result array
           }
       }
       return result; // return reslut, this array is filled with names that are not on friends list
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // access key using [] and set it to value 
    object[key] = value;
    // return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // int for loop to loop through array 
    for(let i = 0; i < array.length; i++) {
        // use delete if any props are listed in array.
        delete object[array[i]]; // use delete function to delete any properties that are listed in array of object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // int new var newArray - use filter with an anonymous function
    let newArray = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem); // return index == self.indexOf(elem)
    });
    return newArray; //return newArray
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}