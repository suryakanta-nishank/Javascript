//Prototype in JS--------->
let obj = {
    name: "Surya",
    age: 20,
    run: () => {
        console.log("selfrun");
    }
};
console.log(obj);

let p = {
    run: () => {
        console.log("run");
    }
};

//obj.run() //this will not work
obj.__proto__= p;

obj.run(); // This will call the run method in obj
p.run();   // This will call the run method in p


//classes and objects in JS
// class RailwayForm{
//     submit(){
//         alert(this.name+"Form Submitted Successfully for the train no "+this.trainno)
//     }
//     cancel(){
//         alert(this.name+"Form Canceled for the train no "+this.trainno)
//     }
//     fill(name,trainno){
//         this.name=name
//         this.trainno=trainno
//     }
// }
// let SuryaForm = new RailwayForm()
// SuryaForm.fill("Surya",14316)
// SuryaForm.submit()
// SuryaForm.cancel()
// let sapaForm =new RailwayForm()
// sapaForm.fill("Sapa",12121)
// sapaForm.cancel()

//object destructuring
const address ={
    street:'',
    city:'',
    country:''
}
const {street,city,country} = address
//orif you name them
const {street:st,city:ct,country:cn} = address

//spread operator
const a =[1,2,3]
const b = [4,5,6]
const combined = [...a,...b]
//if you want to add on middle somwhere
const combined2 = [...a,0,...b]
const clone=[...a]

//rest
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]
  



//

//JS MODULES------->>


import { mul} from "./utility.js";
const res = mul(2,3,4)
console.log(res)
import { add } from "./utility.js";
const res2 = add(2,3,4)
console.log(res2)
import division from "./utility.js";//no need of curly brackets {} as it is default import dunction
const res3 = division(6,0)
console.log(res3)
//even if you don't write division still it can import it
import div from "./utility.js"
const res4 = div(6,0)
console.log(res4)