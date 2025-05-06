//1. ARithematic Operators
// addition, Subtraction, Multplication, Division, Modulus, Exponentiation
 
let sum = 3 + 5;
let sub = 4 - 1;
let mult = 4 * 6;
let div = 4 / 2 ;
let modu = 4 % 2;
let exp = 4 ** 2;


// let checking some extra behaviour of js.
// what if we uese and an arithematic operator in js with primitive data types 

let numOne = 3;
let stringOne = '4'
let res1 = numOne + stringOne;
console.log(res1); // output is 34 this is because when we add with string with number it concatinating the result 

let numTwo = 5;
let stringTwo = '6';

let res2 = numOne + numTwo + stringOne + stringTwo;
console.log(res2,typeof res2, );  // 3 + 5 = 8, and 8 + '4' = '84' and '84' + '6' = '846', final result is '846' DT string.


//2. Comparision Operators

// Equal to ==, Strick equal to ===, Not equal !=, Strick not equal !==, Less >, Grater <, Less equla >=, Grater equal <=,

//  == check in lazyness only comparing the values only
console.log(1 == '1' );   // true , only comparing the values

// === checking strick mode line it also checking the values and datatype,

console.log( 1 === '1');    // false values is same but data type is different.




// main point in js how coercion works?
 
// to understand the coercion we need to use some arethematic operators except addition 

let numThree = 89;
let stringThree = '80'

let res3 = numThree - stringThree; 

console.log(res3);  // this output is very straing 

// in js if we use any other arathematic operator except addition this coercion concept work out and 
// behind the seen it convert the strThree to number using Number(StrThree). now its convert into number
//  and yeild 89 - 80 = 9

// we also do this by hard cord using method Number(). When shuch kind of operation heppend js hendel
// manually 

console.log(null == undefined);  // true why? the equal operator does type coercion if one value is null
//and other is undefine == operator yield true.

console.log(null === undefined);  // false. === operator check both value and type  typeof null is object
// and underine itself type

console.log(NaN === NaN); // false   why false? weird one,  Rule. NaN is not equla to anything, even iteslf
















