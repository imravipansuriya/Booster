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

let count = false;

let countValue = new Promise(function(resolve, reject){
    if(count){
        resolve("Threre is a count value.")
    } else{
        reject("There is no count value")
    }
})

countValue.then( function successValue(result){
    console.log(result)
})

.then(function successValue1(){
    console.log("Func 2")
}).catch(
    function errorValue(result){
        console.log(result)
    }
) 



