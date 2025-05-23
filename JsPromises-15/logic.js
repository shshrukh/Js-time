// What is promises ?
// A promise is an object in JS that represent the eventual completion of failure  of an asynchronous
// operations and its return the value.

// Promise have theree states 1.pending 2.fullfill 3.reject

//new Promise() → PENDING
//    │
//    ├─ resolve() → FULFILLED → .then()
//    └─ reject()  → REJECTED  → .catch()


// const MyPromice01 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },8000)
// });
// One more important thing about promises let we have a function the block of function not exicute untill
// we dont call function but when we create a promise with new keyword its exicute 


const MyPromise02 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
});
MyPromise02
    .then((result)=>{
        console.log('step 1',result);
        return result *2
    })
    .then((result)=>{
        console.log('step 2', result);
        return result + 5;
    })
    .then((result)=>{
        console.log('step 3', result);
        
    })
    .catch((err)=>{console.log(err);
    })