/*====================================
        setInterval
======================================*/

// In JavaScript, a block of code can be executed in specified time intervals. These time intervals are called timing events.

// JavaScript setInterval()
// The setInterval() method repeats a block of code at every given timing event.

function intFunc(){
    console.log("Hello World")
}

setInterval(intFunc, 1000)


clearInterval(intFunc)