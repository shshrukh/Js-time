

// Why we need loops ?
// loops are use for repeat the block of code multiple time 
// We have different types of loops 

//1. for loop
// syntex of for loop 
// for (initialization ; conditon ; innerement/decrement){blocke to perform atcion }

for (let i = 0 ; i < 5 ; i++ ){
    console.log(i);
    
}
// how for loop works 
// 1. initilialization i = 0;
// 2. checking condition 0 < 5 true 
// 3. perfoming the block code  print 0
// 4. after block i= i+1;
// 5. Working utill the condtion false 

//2. While loop 
let i = 0;
while(i < 5 ){
    console.log(i);
    i++;
    
}
// how while loop works 
// 1. checking the condition 
// 2. true then run the block
// 3. repeat untill condition false

// 3. do while 

let ii = 0;
do{
    console.log(ii);
    ii++
}while(ii < 5);

// 1. it will print console 0;
// 2. innerement the vale to ii++
// 3. checking the condition and true the do bolck false then stope ;
// note do while loop run the block first and then check the conditon means it print ii = 0 if conditon is false 


// for of loop --for iterables (Arrays, strings)

let letters = ['a', 'b', 'c', 'd'];
for (let items of letters){
    console.log(typeof items);
    
}
let fName = 'shahrukh';
for (let items of fName){
    console.log(items);
    
}

let user ={fName: 'shaharukh', age : 21}


for(let key in user){
    console.log(key, user[key]);
    
}