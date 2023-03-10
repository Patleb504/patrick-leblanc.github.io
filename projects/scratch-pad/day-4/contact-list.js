// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // FACTORY FUNCTION RETURNS AN OBJECT {id: ?, nameFirst: ?, nameLast: ?}
// int an empty obj to hold key/value pairs
var obj = {};
// lets add in our keys to obj 
obj.id = id;
obj.nameFirst = nameFirst;
obj.nameLast = nameLast;
// return obj to create an object with these keys when function makeContact is called
return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; 
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            return contacts.push(contact);
        },
        findContact: function(fullName){
            // int for loop to loop through and find the first and last name then concat them to become a full name 
            for ( var i = 0; i < contacts.length; i++){ 
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                    return contacts[i];
                } 
            }

        },
        removeContact: function(contact){
            // int for loop to find contacts
            for (var i = 0; i < Array.length; i++){
                // use splice method to remove contact 
                contacts.splice(i, 1, );
            }
        },
        printAllContactNames: function(){
            // int name var with empty string
            var names = "";
            // int for loop to loop through contacts 
            for (var i = 0; i < contacts.length; i++){
                // int if statement to check if names is empty, if yes create a line break in names
                if(names !== ""){
                    names += '\n';
                }
                // reasign names to nameFirst concated with nameLast to form full names 
                names += contacts[i].nameFirst + " " + contacts[i].nameLast;
            }
            // log to check 
            // console.log(names); // looks good 
            // return names as full names! 
            return names;

        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
