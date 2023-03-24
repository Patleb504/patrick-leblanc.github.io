/* CONTROL FLOW
    - Control flow refers to the order that the computer handles statements. 
    
    - As a program you can control the flow of how the computer will 'think' by
        using conditional statements. 
    
    - Conditional statements give the computer a condition in which it must 
        decide true or false. If it is true one block of code runs, if false 
        another runs. Or the code ends and nothing runs.
        Conditional Statements
    SYNTAX
        i.   if:
                                 if (condition) {
                                        'this block of code runs'
                                    }
        ii.  else - if:
                                    } else if (condition) {
                                         'this block of code runs'
                                    }
         iii. else:
                                    } else {
                                         'this block of code runs'
                                    }
        
        iv.  switch:
                                switch(expression) {
                                    case x:
                                         // code block
                                        break;
                                    case y:
                                         // code block
                                         break;
                                    default:
                                         // code block
                                }
        
            Use if to specify a block of code to be executed, if a specified 
            condition is true
            Use else to specify a block of code to be executed, if the same 
            condition is false
            Use else if to specify a new condition to test, if the first 
            condition is false
            Use switch to specify many alternative blocks of code to be 
            executed
            
    
** NOTE: There can be only one if statement in a chain.
         There can be unlimited else if statements in a chain
         There can be only one else statement in a chain
        
*/

//Example:

var gradeOne = 50;
var gradeTwo = 95;

if(gradeOne < 50) {
    console.log('You failed the test.');
} else if (gradeTwo >= 95) {
    console.log('A+! You aced the test.');
}else {
    console.log('No grade. Please take the test.');
}

// prints: 'A+! You aced the test.' 

        /* if and else if statements need a true value to run. if the value in 
          the condition is not true the computer will read the next line of 
        code. As soon as it finds a true is jumps out the conditional statement
        so nothing else will run after, even if it is a true expression. 
        */
        

// Switch
    /*The switch expression is evaluated once and the value of the expression
    is compared with the case values. If it matches values the code of block
    will run that is for that case. 
    
    * switch statements contain 3 keywords. 
        - switch - this keyword is followed by ( ). The switch statement 
                    evaluates the expression in the paranthesis. The value of 
                    the expression is compared against the following cases
        - case - this keyword offers different expressions which the switch word
                    is compared to. The amount of case words is unlimited though
                    you must have atleast one case in the body of the switch 
                    statement
        - break - this keyword breaks out the switch block. when the program 
                    reads this word it will stop execution of code. Without the
                    break, the nexr blosk in the switch statement is executed.
        - default - this keyword tells the program to run code if no case 
                    matches. There may be only one default keyword. It is 
                    optional but recomended. 
    
    
    
    */
    var favNumber = 3;
    switch(favNumber) {
        case 1:
            console.log('No');
            break;
        case 2: 
            console.log('No');
            break;
        case 3:
            console.log('Yes');
            break;
        default:
            console.log('No value');
    }
    
    // prints: 'Yes'
    
    
    // ** NOTE: It is preferred to use switch statements because it makes for 
    //         better readibility of code. However, if you are testing ranges of
    //         values or conditions, use an if else statement. Switch statements
    //         are based on single integer or single values. 
    //         Though, if else statements are better for boolean values.
    