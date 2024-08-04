let mt = document.querySelector('.mine')
let bt = document.querySelector('button')
let res = document.querySelector('.result')
let ran = Math.floor(Math.random()*100)
let 
console.log(ran)
bt.addEventListener('click', function(){
    if(mt.value == ran){
        res.innerHTML = 'Correct'
    }
    else{
        res.innerHTML = 'Wrong'
    }
})