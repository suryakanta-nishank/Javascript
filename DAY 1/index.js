//Asynchronous JavaScript
//sync is done one after another ,till one is complete another cannot run
//async means all starts at once all tasks, i one task is over then it will respond

console.log("Hey1")
console.log("Hey2")
setTimeout(() => {
    console.log("Hey3")
},1000);
console.log("Hey4")

//javascript is not asynchronous really
//The **event loop** in JavaScript manages the execution of code by continuously checking the main stack (where synchronous code runs) and the side stack (callback queue, where asynchronous operations wait). When the main stack is empty, the event loop moves callbacks from the side stack to the main stack for execution, enabling non-blocking, asynchronous behavior in a single-threaded environment.

//CALLBACK------->always a function , it runs when the compilation of async code is complete

//PROMISE------->A **Promise** in JavaScript is an object that represents the eventual result of an asynchronous operation, either successful (resolved) or failed (rejected), allowing for cleaner handling of async tasks.
var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);

    if(n>4)
        return res();
    else
        return rej();
})
.then(function(){
    console.log("resolve done")
})
.catch(function(){
    console.log("rejected")
})

//promise practise:(example of day today life)
var ans = new Promise(function(res,rej){
    return res("Come to home");
})
var ans2 = ans.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res("Open the door")

    })
})
var ans3 = ans2.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res("cook for yourself")
    })
})
var ans4 = ans3.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res("eat and sleep")
    })
})
var ans5= ans4.then(function(data){
    console.log(data)
})
//async await------>
async function abcd(){
   let raw = await fetch(`https://randomuser.me/api/`);
   let ans= await raw.json();
   console.log(ans);
}
abcd();

//concurrency and parallelism
// **Concurrency** in JavaScript means doing multiple tasks by starting one, pausing it, then starting another, and so on, so it looks like they are happening at the same time. **Parallelism** is doing multiple tasks at the exact same time, but JavaScript typically does concurrency, not parallelism, because it runs on a single thread.