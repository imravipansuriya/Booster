/*=========================
    JavaScript ES6
===========================*/

/*

    JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.

 */

// JavaScript let

// let is block-scoped.

/*
    The variables declared using let are block-scoped. This means they are only accessible within a particular block. For example,
*/

let a = 10;

{
    let a = 20;
}

console.log(a)

/* 
------------
Block Scope
------------

> ES6 introduced two important new JavaScript keywords: let and const.
> These two keywords provide Block Scope in JavaScript.
> Variables declared inside a { } block cannot be accessed from outside the block:
 
/*

{
 var d = 10;
}
console.log(d)   // we can print outside


{
    const b =  3;
    console.log(b)   // can not print outside
}


{
  let x = 2;
  console.log(x) // can not print outside
}

*/

// x can NOT be used here