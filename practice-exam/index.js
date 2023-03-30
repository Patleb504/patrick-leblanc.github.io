// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
function greeting (greeting, location, time){
    console.log(`${greeting} ${location} ${time}`);
}



// 2.
function contestants (arr){
 return arr.length;
}


// 3.
var filterSpecies = dogs.filter(function(contestant){
    return contestant.species === 'dog';
}); 



// 4. 
var dogContestants = [...filterSpecies]; // shallow copy



// 5. 
var dogsWithClasses = dogContestants.map(function(dog){
    // let copy = object.assign({}, dog); // creates deep copy of 
    // if(dog.weight >= 21){
    //     copy.class = 'green';
    // } else if (dog.weight >= 11){
    //     copy.class = 'yellow';
    // } else {
    //     copy.class = 'red';
    // }
    //     return copy;
   
   
    // int if chain to assign class 
    if(dog.weight >= 21){
        dog.class = 'green';
    } else if (dog.weight >= 11){
        dog.class = 'yellow';
    } else {
        dog.class = 'red';
    }
        return dog;
});
    


// 6.
var firstInClass = function(array, output = {}){
// base
if(array.length === 0){
    return output;
}

// recursion
    for (let key in array[0]){ // for in loop 
        output[key] = array[0][key];
    }

    return firstInClass(array.slice(1), output);
};



// 7.
var votes = dogs.reduce(function(accumulator, current){

    accumulator += current.votes;// accesses the num of votes
    
    return accumulator;
}, 0);
// accumulator => repersents whatever we are trying to accumlate to return
// current => repersents the current dog object
// seed => should always match the datatype of what yuour returing