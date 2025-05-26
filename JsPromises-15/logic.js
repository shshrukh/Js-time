// What is promises ?
// A promise is an object in JS that represent the eventual completion of failure  of an asynchronous
// operations and its return the value.

// Promise have theree states 1.pending 2.fullfill 3.reject

//new Promise() → PENDING
//    │
//    ├─ resolve() → FULFILLED → .then()
//    └─ reject()  → REJECTED  → .catch()


const MyPromice01 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10)
    },8000)
});
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

    // let says we have multipla promise in and we have a method Promise.all()

    const promiseOne = new Promise ((resolve)=>{setTimeout(()=>{resolve(1)},2000)}); 
    const promiseTwo = new Promise ((resolve)=>{setTimeout(()=>{resolve(2)},3000)}); 
    const promiseThree = new Promise ((resolve)=>{setTimeout(()=>{resolve('hi')},1000)});
    const promiseFour = new Promise ((resolve,reject)=>{setTimeout(()=>{reject('rejected')},3000)})
    
    Promise.all([promiseOne, promiseTwo, promiseThree])
        .then(data=>console.log(data))
        .catch(err=>console.log(err))


    Promise.all([promiseOne,promiseFour, promiseThree])
        .then(data=>console.log(data, 'this is data massage'))
        .catch(err=>console.log(err,'this is err massage'))

const promiseFive = new Promise((res, rej)=>{setTimeout(()=>{res(2)},4000)})
const promiseSix = new Promise((res, rej)=>{setTimeout(()=>{res(4)},2000)})


//Promise.any() is a method thet return the promise that we have multiple promise thet resolve

Promise.race([promiseFive, promiseSix])
    .then((data)=>{console.log(data);
    })
    .catch((err)=>{console.log(err);
    })


Promise.any([promiseFour,promiseFive])
    .then((data)=>{console.log(data);
    })
    .catch((err)=>{console.log(err);
    })




// Promise.allSettled() take a itterable promise and return a single promise 

Promise.allSettled([promiseFour,promiseFive])
    .then((data)=>{console.log(data)})


                                        // Async / Await

// we declear the async function by putting the asyn key word brefor the function keyword.
// An async function can always return the promise.
// If the functon return the non-promise value, async will wrap it in a resolved Promise.
//If the function throw an error, async will wrap it in a rejected value.

// the await keyword is only be used inside async function .
//it pause the exuction of the async function untill the promise its waiting on settles(resolves, rejects);
// if the promise resolve await return the resolve value
//if the promise reject await return the reject value.


function fetchDataUser (){
    return new Promise((res)=>{
        setTimeout(()=>{
            res({userName: 'shahrukh arbaz', age: 26})
        },3000) 
    })
    const data = await.fetchDataUser()
}


