//  Bind, apply and call are the method of the functions
// 1. in JS every function are the object
// 2. Function inharit form function.prototype, which includes call apply and bind.
 
function greet (){};
console.log(typeof greet);
console.log(greet.__proto__ === Function.prototype);

// call()- Call a function immediately with a given this

function greetings (greet){
    return `${greet} form ${this.name}`
};
const user = {
    name : "shahrukh"
}

const res1 = greetings.call(user,"hello");

console.log(res1);


// usecase of call method 
//1.Reusing the method form one object in another
const userOne = {
    name : "shahrukh",
    greet : function(greetings){
        return `${greetings} to ${this.name}`
    }
}

const res2 = userOne.greet("hello");
console.log(res2);
// now what if i have another object and same method of greet by making hard code simply i use call method 
// and access those method in other objects 

const userTwo = {name:"arbaz"};

const res3 = userOne.greet.call(userTwo,"hello");
console.log(res3);









//2.
//3.