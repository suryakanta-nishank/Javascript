//Fetch API
//API= Application Programming Interface
const data = "https://dog.ceo/api/breeds/image/random";
const dog = document.querySelector('.image')

const btn = document.querySelector('button')


const image= async()=>{
    console.log("Getting Image...")
    let response = await fetch(data);
    console.log(response)
    let end = await response.json();
    console.log(end)
    dog.innerHTML = `<img src="${end.message}">`

}
btn.addEventListener('click',image)

