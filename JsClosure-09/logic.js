let number = 0;
function outerFunction (){

    function innerFunction (){
        number += 1
    }
    innerFunction()
    console.log(number);
}
outerFunction();
console.log(number);
