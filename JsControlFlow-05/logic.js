//Condition statement allow your cocde to allow your code make decision and execute different code 
// depending on wether the condition is true or false
// if we want to execute some code on the base of condition we have control flow statements

//1. if ,else if and else 

if(true){
    console.log('this is if blosk statement or code ');
    
}else {
    console.log('this is else block statment or code ');
    
}

if(false){
    console.log('this is if blosk statement or code ');
    
}else {
    console.log('this is else block statment or code ');
    
}

// if we have multipal conditions then we have else if keyword

if(!true){
    console.log('this is if block');
    
}else if(true) {
    console.log(' this is else if bolck');
    
}else{
    console.log(' this is else block');
    
}



// switch statements

switch ('applee') {
    case 'banana':
        console.log('this is banana case');
        
        break;
    case 'apple':
        console.log('this is apple case');
        break ;   

    default:
        console.log('if none of the case satisfied then default case');

}

// Ternary Operator
// this is a work like if else statement we have only two consitions only
// condition ? expressionIfTrue : expressionIfFalse ;    Tarnary operators return a value.

let age = 18;

let massage = age >= 18 ? 'you are adult' : 'hello boy/girl';

console.log(massage);


