// Java Script is single threaded 
//1. it exicute one task at a time 
//2.Use the call stack to handel the asynchronous code 


//Call Stack handel the synchronous code 
//code run form tope to bottom
//Functions are added and removed in LIFO order.
// the event loop is only step in when the call stack is empty


console.log('print A');

setTimeout(()=>{console.log(('print B form event loop'))},5000);

console.log('print C')


// Async code are pushed to queues and handel later.

// There are two type of Queues

//1. Microtask Queue

// Microtask Queue runs immediately afer the call stack is empty.

//2. Macrotask Queue

// run after when mirotask have been cleared.



console.log('this start form point A');

setTimeout(()=>{console.log('this is the point C')},0);

Promise.resolve().then(()=>{console.log('this is the point B')});


for(let i = 0; i < 100; i++){
    console.log(i,'this is the point D');
}

console.log('this is the point E');


function loop(){
    console.log('hello from loop')
}
loop();