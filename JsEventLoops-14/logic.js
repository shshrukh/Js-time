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
