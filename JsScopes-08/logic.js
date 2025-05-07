// Scope determine where to assess the variables and functions in code
// 1. Global Scope
// if a variable is declear global then it can be assess any where in code 

let fName = "shahrukh";
const age = 34;
var func = function greet(){
    return `hello!`
}

{
    console.log(fName);
    
    {
        console.log(age);
        
        {
            console.log(func());
        }
    }
}

// 2. local Scope (functional Scope)

const func2 = function(){
    let fullName = 'shahrukh arbaz';
    console.log(fullName);
    return fullName
}
func2()
// console.log(fullName)  out put is error and says fullName is not define.


//3. Block Scope

//varibale decleared inside whit let or const inside block {} are accessible inside that blocks

{
    let num1 = 43;
    console.log(num1);
    
}
//console.log(num1);  this will give error 


