let number = 0;
function outerFunction (){

    function innerFunction (){
        number += 1
    }
    innerFunction()
    console.log(number);
}
// outerFunction();
// console.log(number);


// closure play an important role in progaraming in simply we say it cant forget the values if the function 


//Project to make ATM machine

function createAtm( ){
    const userDetails={
        password : 1122,
        userAmount : 500,
        passAttemps : 0
    }
    
    return {
        checkingBlance : function(pin ){
            if (userDetails.passAttemps >= 3 ) return 'Account locked !';
            if (pin === userDetails.password ) {
                return `Your current amount is ${userDetails.userAmount}`
            }else{
                userDetails.passAttemps++;
                return 'Wrong Password'
            }
        },
        withdraw: function(pin, amount){
            if(userDetails.passAttemps >= 3) return 'Account locked !';
            if(amount > userDetails.userAmount ) return "Insufficient funds";
            if( pin === userDetails.password){
                return `you withdraw a amount:${amount} and your avalible balance is ${userDetails.userAmount -= amount}`

            }else {
                userDetails.passAttemps ++
                return 'incorrect password'
            }
        }
    }
    
}

const atm = createAtm()
console.log(atm.checkingBlance(1122));
console.log(atm.withdraw(1122,300));
console.log(atm.withdraw(1122,50));
console.log(atm.withdraw(112,50));
console.log(atm.withdraw(112,50));
console.log(atm.withdraw(112,50));
console.log(atm.withdraw(112,50));


//  A function that remember its lexical scope, even when the function is exicuted outside
// of its original scope 


// some nested closure in js 

function abc(){
    let fName = "shahrukh"
    function efg(){
        let lName = 'arbaz';
        function hij (){
            fullName = fName+" "+lName;
            return fullName;
        }
        return hij
    } 
    return efg
}
// let addingName = abc();
// let gettinName = addingName();
// console.log(gettinName());

// instead of stroing in variables we can call closure 
console.log(abc()()());

// closure exampe for numbers can closure cache the varibel values or not?



function outerFunction(){
    let myNumOne = 0;
    function innerFunction(){
        myNumOne += 5; // here the MyNumOnne = 5
        function nestedFunction(){
            myNumOne++ // incr the value of MyNumOne = 6
            return myNumOne; // here the value of MyNumOne = 6
        }
        return nestedFunction;
    }
    return innerFunction

}


const res = outerFunction();
const res2 = res();
console.log(res2());
console.log(res2());
console.log(res2());


// some challenge of closures
// makeing a function take a input callback return a new function 



function once(cb) {
  let called = false;   // Track if the function has already run
  let result;           // Store the result of the first call

  return function () {
    if (!called) {
      result = cb();    // Run and store the result
      called = true;    // Mark as already called
    }
    return result;      // Return stored result every time
  };
}

function login() {
  console.log("🔐 Logging in...");
  return "Welcome!";
}

const loginOnce = once(login);

console.log(loginOnce()); // 🔐 Logging in... → "Welcome!"
console.log(loginOnce()); // (No log) → "Welcome!"
console.log(loginOnce()); // (No log) → "Welcome!"





