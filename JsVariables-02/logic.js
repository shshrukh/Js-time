
//Charactieristic of var 

//1. can be re-declared and re-assignd

var fName = 'shahrukh'  // create a variable with var and assignd the the value as string 'shahrukh';
console.log(fName);  
fName = 'arbaz'        // re-assing the the fName value 'arbaz'
console.log(fName);
var fName = 'saleem'    // re-declared the variable fName and we can assignd the value 'saleem'
console.log(fName);

//2. var keyword is function scope. Not block-scope;

// if we created a var variable inside a function either that is any function def, exp or arrow 
// we can't use the variable out side the function because var is function scope

function testVar (){
    
    if(true){
        var x = 5;
    }
    console.log(x);
}
testVar();

//but var is block scope 

{
    {
        {
            if(true){
                var numOne = 14;
            }
            console.log(numOne); // output is 14
            
        }
        console.log(numOne); // output 14
        
    }
    console.log(numOne);  // output 14
    
}
console.log(numOne);   // output 14


//Charactieristic of let
//1. can't be re-declared in same scope but re-assignd the value;
let numTwo = 3;
console.log(numTwo);
numTwo = 13 // we can re-assignd the value of numTow but we can't redeclared the let numTow in same scope.
console.log(numTwo);

//but we can re-declared in differnet scope;
{
    let numThree = 1;
    console.log(numThree);  // outout 1
    
    {
        let numThree = 2;  // output 2
        console.log(numThree);
        
        {
            let numThree = 3;
            console.log(numThree); // output 3
            
        }
    }
} 

// what if we console log the value in globel scope ? it and error 'numThree is not define
// which means that let is block scope.
// console.log(numThree);

// charastics of const 

const e = 2.7128;

// const reffer to constant value which is not change 
// const is block scope 
// can't be re-declared in same scope and not re-assignd in any scope
{
    const e = 3.714  // 
    console.log(e);
    {
        const e = 8.1243
        console.log(e);
    }
}


console.log(e);


// Hoisting 

// in the metter of variables var, let and const what if we define after and use if first?

// let check in var 

console.log(numFour); // 
var numFour = 1010; // i declared the var in line 102 and use in line log(numFour) in line 101?


// the output result is undefine. Why this happening 
// let understand the consept of hoisting.

// console.log(numFive, numSix); // output is referrence error because when we use variable in metter of numFive and numSix in compilation phase snd to TDZ and unisilized the value

let numFive = 5;  
const numSix = 6 








