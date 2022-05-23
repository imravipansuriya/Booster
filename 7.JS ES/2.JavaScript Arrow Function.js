/*==============================
   JavaScript Arrow Function
================================*/

/*
    Arrow function is one of the features introduced in the ES6 version of JavaScript. 
    It allows you to create functions in a cleaner way compared to regular functions. For example,
*/

let  a = (x, y) => {
    return x * y
}


// Arrow Function Syntax

let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}

// Here,

// myFunction is the name of the function
// arg1, arg2, ...argN are the function arguments
// statement(s) is the function body


// If the body has single statement or expression, you can write arrow function as:
let myFunc = (arg1, arg2, ...argN) => expression



// this with Arrow Function

/* 
    However, this is not associated with arrow functions. Arrow function does 
    not have its own this. So whenever you call this, it refers to its parent scope. 
*/



