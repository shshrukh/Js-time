// In js every value have a type, this determine what kind of data it is and how its behave

// two main categories 
//1. Primitive     2. Non-primitive

// primitive are immutable and non-primitive are mutable

//  primitive are immutable means they can't be change onece created;
let fullNname = 'abc xyz';
let number = 1;
let boolean = true //or false
let undefine = undefined;
let nullDataType = null;
let bigInt = BigInt(23);
let symbl = Symbol('id');


// these primitve data types are store in stack memory 
// when we assign or copy a primitive, a new copy is made

let a = 11;   // create a container/pointer in stack and assign value 11
let b = a;    // create a container/pointer in stack and copy the value of a which is 11
console.log(a,b);   // output 11, 11


fullNname[0] = "u";
console.log(fullNname);


// non-primitive also called reference data type data can be change 

let user = {

    fName : 'abc',
    lName : 'xyz'

}

let fruites  = ['mango', 'banana', 'apple']


function myFun(){
    return 'abc'
}

let datess = Date();
console.log(datess);







