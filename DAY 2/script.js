
// Prototype in JS
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

// Using prototype inheritance
obj.__proto__ = p;

obj.run(); // Output: run
p.run();   // Output: run

// Classes and objects in JS
class RailwayForm {
    submit() {
        alert(this.name + " Form Submitted Successfully for the train no " + this.trainno);
    }
    cancel() {
        alert(this.name + " Form Canceled for the train no " + this.trainno);
    }
    fill(name, trainno) {
        this.name = name;
        this.trainno = trainno;
    }
}

let SuryaForm = new RailwayForm();
SuryaForm.fill("Surya", 14316);
SuryaForm.submit(); // Alert: Surya Form Submitted Successfully for the train no 14316
SuryaForm.cancel(); // Alert: Surya Form Canceled for the train no 14316

let sapaForm = new RailwayForm();
sapaForm.fill("Sapa", 12121);
sapaForm.cancel(); // Alert: Sapa Form Canceled for the train no 12121

// Object destructuring
const address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
};
const { street, city, country } = address;
console.log(street, city, country); // Output: 123 Main St Anytown USA

// Or renaming during destructuring
const { street: st, city: ct, country: cn } = address;
console.log(st, ct, cn); // Output: 123 Main St Anytown USA

// Spread operator
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Adding in the middle
const combined2 = [...a, 0, ...b];
console.log(combined2); // Output: [1, 2, 3, 0, 4, 5, 6]

const clone = [...a];
console.log(clone); // Output: [1, 2, 3]

// Rest operator
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");
// Console Output:
// a one
// b two
// manyMoreArgs ["three", "four", "five", "six"]

// Let and Const
let variable = "I'm a variable";
const constant = "I'm a constant";

variable = "I can be changed";
// constant = "I can't be changed"; // This will throw an error

console.log(variable); // Output: I can be changed
console.log(constant); // Output: I'm a constant

// Arrow Functions
const addFunc = (a, b) => a + b;
console.log(addFunc(2, 3)); // Output: 5

const greet = name => `Hello, ${name}!`;
console.log(greet("Surya")); // Output: Hello, Surya!

// Template Literals
const name = "Surya";
const greeting = `Hello, ${name}! How are you?`;
console.log(greeting); // Output: Hello, Surya! How are you?
import { mul } from "./utility.js";
const res = mul(2, 3, 4);
console.log(res); // Output: 24

import { add } from "./utility.js";
const res2 = add(2, 3, 4);
console.log(res2); // Output: 9

import division from "./utility.js"; // No need for curly brackets as it is a default import
const res3 = division(6, 0);
console.log(res3); // Output: Division by zero is not allowed

// Even if you don't write division still it can import it
import div from "./utility.js";
const res4 = div(6, 2);
console.log(res4); // Output: 3

