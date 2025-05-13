// lexical enviroment is one of the core foundation to how js handel variables and closers


// Enviroment Scope have two parts
// 1. Enviroment Recodes      2. Outer lexical Enviroment Refference



const hero = "Batman";   //-->here hero is define globle and value is Batman

function outer() {
    const hero = "Iron Man"; //-->FS its iron Man

    function inner() {
        console.log("Hero is:", hero);
    }

    return inner;
}

const callHero = outer();
callHero();


const numOne = 1;


function funOne( ){
    const numOne = 2;
    console.log('here the number is ', numOne );
    function funTwo () {
        const numTwo = 12;
        
        function funThree(){
            return `here the number is ${numTwo}`;
        }
        return funThree()
    }
    return funTwo()
}
const value = funOne();
console.log(value);
