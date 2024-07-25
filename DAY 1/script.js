 //Function
 //Block of code that performs and can be invoked later
//  console.log("HEllo")
//  "abc".toUpperCase()
//  [1,2,3].push(23);//push is one function 
//syntax
function fnc1() {
    console.log("Welcome")
    console.log("WHAT's UP")
}
fnc1();//function is a technique for lower the redudency
//function with parameters
function fnc2(message){
    console.log(message)
}
fnc2("HELLO")
//NOT A NUMBER = NaN error
function fnc3(str,n) {
    var x=str*n;//NaN means str not a number
    console.log(x)
}
fnc3( "hi",3);
//function params like local variables of function is block scope
function sum(x,y) {
    console.log("before return")
    s=x+y
    console.log(x)//In sum function x is defined so only can access inside the function
    return s;
    console.log("AFter return");//this line will never be executed
}
var z=sum(2,3)
//console.log(x)//it give you an error because it is not defined outside of function sum
console.log(z)

//ARROW FUNCTION

const arrowsum=(a,b)=>{
    s=a+b;
    console.log(s)
}
arrowsum(4,5)

//Create a function using the"function" keyword that takes a string as an argument and returns the number of vowels 
function vowels(str)
 {
    let vowelscount=0;
    for(let i=0; i<=str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||
        str[i]=="o"||str[i]=="u"){
          
            vowelscount++;
           
           
        }
        
    }
    
    console.log(vowelscount);
}
vowels("abcdei")

//same problem with arrow function 
let vowel=(str)=>{
     let vowelscount=0;
    for(let i=0; i<=str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||
        str[i]=="o"||str[i]=="u"){
           
            vowelscount++;
           

        }
    }
    console.log(vowelscount);
}
vowel("abcdei")

//forEach loop in array
let arr=[1,2,3,4,5];
// arr.forEach(function printvalue(val){
//     console.log(val)
// })
arr.forEach((val,idx,arr)=>{
console.log(val*val,idx,arr);
});

//map
let map= arr.map((val)=>{
    return val;
});
console.log(map)


//filter method
let newarr=arr.filter((val)=>{
    return val%2===0;
})
console.log(newarr)

//reduce
//for arr[1,2,3,4,5] initially res is 1 and curr is 2
const result = arr.reduce((res,curr)=>{
    // if (res>curr){
    //     return res
    // }
    // else return curr
    return res > curr ? res:curr

});
console.log(result)

//Take a number n as input from user. create an array of numbers from 1 to n use the reduce method to calculate sum of all numbers in the array and use reduce method to calculate product of all numbers in the array.
let num = prompt("give me a number");
let arr1 = [];
for (let i = 0; i <=num; i++) {
   arr1[i-1]=i;
    
}
let sum2 = arr1.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum2)

//closure ------------->function with it's lexical environment
message="Good Global"
function hello(){
    let message="Good Morning"
    //so now message = good morning inside the function
    console.log(message)
let c = function hello1(){
    console.log("I am C "+ message)
}
return c
}
c= hello()
c()