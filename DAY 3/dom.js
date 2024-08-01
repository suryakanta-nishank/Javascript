//4 pillars of js
//1. selection of an element
//2 changing html
//3 changing css
//4 event listener

var a = document.querySelector("h1")
console.log(a)
a.addEventListener("click",()=>{
    console.log("clicked")
    a.innerHTML ="It's Changed"
    a.style.backgroundColor="pink"
})
var a = document.querySelector(".bulb")
var b = document.querySelector(".but")
var flag = 0
b.addEventListener("click",()=>{
    if(flag==0){
         a.style.background="radial-gradient(circle at 50% 35%, yellow 0%, white 60%)"
         b.style.backgroundColor="black"
         flag=1
            }
    else{
        a.style.background="transparent"
        b.style.backgroundColor ="rgb(207, 207, 2)"
        flag=0
    }
   
})
//Query selector All
// var headers = document.querySelectorAll("h1");

// headers.forEach((header) => {
//     header.addEventListener("click", () => {
//         header.style.color = "red";
//     });
// });
var fir = document.getElementsByClassName("first");
var sec = document.getElementById("second");

for (let i = 0; i < fir.length; i++) {
    fir[i].addEventListener("click", () => {
        fir[i].style.color = "purple";
    });
}

