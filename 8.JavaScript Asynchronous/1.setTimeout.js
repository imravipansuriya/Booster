/*==================
    setTimeout
====================*/

/*
    The setTimeout() method executes a block of code after the specified time. 
    The method executes the code only once.

    setTimeout() is a blocking statement.

*/

setTimeout( 
    () =>{
        console.log("it will print after 1 milisecond");
    },1000)


function main(){
    console.log(1*10)
}

setTimeout(main, 2000)


// non-blocking statement
console.log(0)