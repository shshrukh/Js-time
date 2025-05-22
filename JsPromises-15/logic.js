// What is promises ?
// A promise is an object in JS that represent the eventual completion of failure  of an asynchronous
// operations and its return the value.

// Promise have theree states 1.pending 2.fullfill 3.reject

const promise = new Promise((res,rej)=>{
    if(false){
        console.log('i complet my promise');
        
    }else{
        console.log('sorry i didnt complet my promise');
    }
});

console.log(promise);


const fatch = ()=>{
    return new Promise ((res, rej)=>{
        setTimeout(()=>{
            if(true){
                res('facthing apis successfuly')
            }else{
                rej('soory server is down');  
            }
        },2000)
    })
}

// after creationg promise we have to cunsume the promise


fatch()
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)});

// Real-world example: Call API.

function fatchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const data = {fName : "abc"};
            res(data);
        },2000)
    })
}
fatchData()
    .then(data => console.log(data))
    .catch(err=> console.log(err))



