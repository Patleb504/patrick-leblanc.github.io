// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { mapValues } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./patrick-leblanc.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */










var maleCount = function(array) {
    // use _.filter() method to find # of male customers
    // lterate through collection and pass each item to a "test function"
    // if "test function" returns true, item is pushed to output array
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });

        return males.length;
};

var femaleCount= function (array){
// use _. reduce method to find # of female customers
let females = _.reduce(array, function(accumlator, current){ // number of female customers || current item
    if(current.gender === 'female'){
        accumlator += 1;
    }
        return accumlator;
},0);
    return females;
};

var oldestCustomer = function (array){
// use pluck function with parms array, 'name'
var nameArray = _.pluck(array, 'name'); 
// declare new var as ageArray call pluck(array, 'age)
  var ageArray = _.pluck(array, 'age'); 
  
  //use math.max to find the max value. // use rest parameter to take multiple values
  var oldestAge = Math.max(...ageArray); 
  // loop through nameArray
  for (let i = 0; i < nameArray.length; i++) { 
    //if oldest age, return the name of that customer
      if(oldestAge === ageArray[i]) { 
          return nameArray[i];
      }
  }
  

};
  


var youngestCustomer = function (array){

// same as oldest costumer, use pluck and math.min
    
var nameArray = _.pluck(array,'name');
var ageArray = _.pluck(array,'age');

var youngestAge = Math.min(...ageArray);

for(let i = 0; i < nameArray.length; i++) {
if(youngestAge === ageArray[i]) {
    return nameArray[i];
}
}

};


var averageBalance = function (array){
// use reduce

return array.reduce(function(accumulator, person){
   // use .replace to remove $ and ,   
    return accumulator + parseFloat(person.balance.replace(/\$|,/g, '')) / array.length; 
    // set seed to 0 
      },0); 
  };
  

var firstLetterCount = function(array, letter) {
// reduce
return array.reduce(function(accumulator, person) {
    if(person.name[0].toLowerCase() === letter.toLowerCase()) { // set both to lowercase for better comparison
        return accumulator + 1; // add 1 to accumulator and return 
    } else {
        return accumulator; // return accumulator
    }

},0); // seed 0

};



var friendFirstLetterCount = function (array, customer, letter){
    // int var to use latter
    let friendsArr;
    // int for loop to loop through array
    for(let i = 0; i < array.length; i++){
        // int if chain to find if name in array = customer
        if(array[i].name === customer){
            friendsArr = array[i].friends;
        }
    }

    // return reduce with friendsArr and a call back with accumulator and nameObj
    return _.reduce(friendsArr, function(accumulator, nameObj){
        // int if chain to check if 
        if(nameObj.name[0].toUpperCase() === letter.toUpperCase()) {
           return accumulator += 1;
        }
            return accumulator;
            // set seed = 0
    },0);


};



var friendsCount = function(array, name){

 // call on _.each twice to loop through array and to access object
 var mutualFriends = [];// create an empty array variable
  _.each(array, function(object){
    _.each(object.friends, function(friend){
      if (friend.name === name){ // if friends name equals name that is given 
        mutualFriends.push(object.name); // push name to mutual friends array
      }
    });
  });
  return mutualFriends; //return array mutual friends

};

var topThreeTags = function(array){
var tagsArr = [];
// call on each to loop through array and objects
_.each(array,function(customer){
    _.each(customer.tags, function(tag){
        tagsArr.push(tag);
    });
});
var tagsObject; 
// use reduce to loop through tags array
tagsObject = _.reduce(tagsArr, function(accumulator, tag){
    if(accumulator[tag]) {
    accumulator[tag] += 1; // reassign tag key 
    return accumulator;
    }
    accumulator[tag] = 1;
    return accumulator;
    
},{}); // seed should be an object
// use object.entries to create an array with key value pairs
 var result = Object.entries(tagsObject); // result is an array of sub arrays contains key value pairs
 
//  console.log(result);
 
 var topTags = [];
 
 // loop through result to find the tags that occurred most often 
 for(let i = 0; i < result.length; i++){
     if(result[i][1] === 3) {
        topTags.push(result[i][0]);
     }
 }
 
return topTags; // return array of top tags
 

};

var genderCount = function (array){

let genderArr = [];

for(let i = 0; i < array.length; i++) {
   genderArr.push(array[i].gender);
   console.log(genderArr);
}

return _.reduce(genderArr, function(accumulator, gender){
// check to see if number occured
//if the number is a key in our object
if (accumulator[gender]){
// add 1 to it's value
accumulator[gender] += 1;
return accumulator;
}
// if the number is not a property in our object 
//make the key value pair with the value of 1
accumulator[gender] = 1;
return accumulator;
  }, {});
  
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
