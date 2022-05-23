/*====================================
JavaScript Promise and Promise Chaining
======================================*/

/*

In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.

Pending
Fulfilled
Rejected

*/

// create a promise

// let promise = new Promise( function (resolve, reject){

// })


// ex 1 

let count = true;

let countValue = new Promise(function(resolve, reject){
    if(count){
        resolve("Threre is a count value.")
    } else{
        reject("There is no count value")
    }
})

console.log(countValue)
