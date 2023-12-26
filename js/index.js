//const cars = ["Saab", "Volvo", "BMW"];

const cars = [];
cars[1] = "Saab";
cars[2] = "Volvo";
cars[3] = "BMW";

let car = cars[0];
cars[0] = "Opel";
console.log(cars.length);
console.log(cars.sort())

const fruits = ["banana", "orange", "apple", "mango"];
console.log(fruits.toString());
fruits.push("lemon")
console.log(fruits);
let size = console.log(fruits.length);
console.log(fruits.join("/"));
console.log(fruits.pop());
fruits.push("kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("abacate");
console.log(fruits);

const cars_fruits = cars.concat(fruits);
console.log(cars_fruits);
const carsOne = cars.concat("Ferrari");
console.log(carsOne);

fruits.splice(2,0, "laranja", "melancia")
console.log(fruits);
fruits.splice(0,1,);
console.log(fruits);

const person = {firstName:"John", lastName:"Doe", age:46};

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr);
console.log(newArr);