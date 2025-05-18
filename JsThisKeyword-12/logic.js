// This keyword is refers  to the objec that is exicuting the current function ;


// what is value of this in browser and js run time enviroments 
// In global context the value of this?

console.log(this); // Give two results in browser it window Object and in node it empty object

// Inside the function what is value of this?
function valueOfThis(){
    console.log(this);
}

valueOfThis(); // this is still window object

// Note in use stirct mode the value of this is undefine indide function.


// Inside an object Method 

const user = {
    name: 'abc',
    showName : function(){
        return this.name; // when we make a method for object and use this, this refer to that object
    }
}

const res1 = user.showName();
console.log(res1);

const arrowFunction = ()=> this;
console.log(arrowFunction());

let userOne ={
    name :"abcd",
    method : function (){
        return ()=> this.name
    }
}

console.log(userOne.method()());







