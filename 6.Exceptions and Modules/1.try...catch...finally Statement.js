/*=======================================
JavaScript try...catch...finally Statement
=========================================*/

// The try...catch statement is used to handle the exceptions.

/*
try{
    // body of try
} 
catch(error){
    // body of catch
}
*/


// const numerator = 100;
// const denominator = 'a';

// try {
//     console.log(numerator/denominator)
//     console.log(a)
// }

// catch(error){
//     console.log("An error caught")
//     console.log("Error message: " + error)
// }


// JavaScript try...catch...finally Statement

/*

    You can also use the try...catch...finally statement to handle exceptions. 
    The finally block executes both when the code runs successfully or if an error occurs.

 */

const num = 100;
const deno = 'a';

setTimeout( function(){
    try{
        console.log(num/deno)
        console.log(a)
    } 
    catch(error){
        console.log("Error " + error)
    }
    finally{
        console.log("Programe run sucessfully")
    }
}, 3000);

