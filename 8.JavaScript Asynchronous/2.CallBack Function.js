/*====================================
    JavaScript CallBack Function
======================================*/

// A callback is a function passed as an argument to another function.


function greet(){
    console.log('function 1')
    callbackfunc()
}

function callbackfunc(){
    console.log('callback')
}

greet()



let x = () => {
    console.log('func 1')
    y()
}

let y = () =>{
    console.log('callback')
}

x()

