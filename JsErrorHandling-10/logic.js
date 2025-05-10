// Error handling chatching and managing errors in code 
// we use error handling by try and catch.


try {
    const numOne = 20;
    const numTwo = numOne/numThree;
    console.log(numTwo);
    
} catch (error) {
    console.log(error.message);
    console.log(error.name);
}


try {
    throw new Error("this is try catch error")
} catch (error) {
    console.log(error.message);
    
} finally{
    console.log("this is final block"); // this block is runs always if we got error either not.
    
}