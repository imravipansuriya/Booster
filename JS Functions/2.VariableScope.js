/*=========================
    JavaScript Function
===========================*/

// Scope refers to the availability of variables and functions in certain parts of the code.


/*

In JavaScript, a variable has two types of scope:

1.Global Scope
2.Local Scope

 */


// Global Scope
// -------------

// A variable declared at the top of a program or outside of a function is considered a global scope variable.

// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello


// Local Scope
// -------------


// it can only be accessed within a function.

// program showing local scope of a variable

/*
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error

*/


// let is Block Scoped

/*

// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();

*/


/*

a is a global variable. It can be accessed anywhere in the program.
b is a local variable. It can be accessed only inside the function greet.
c is a block-scoped variable. It can be accessed only inside the if statement block.

*/



// https://www.programiz.com/javascript/variable-scope 


