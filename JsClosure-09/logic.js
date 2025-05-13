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












