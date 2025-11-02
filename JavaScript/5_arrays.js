//Declaration of an array

let myArray = [];
let numbers = [1,2,3,4,5];
let fruits = ["apple","banana","mango"];
let lang = ["Java", "C++","Python"];


//push
lang.push("Ruby","HTML");
console.log(lang);

//pop

lang.pop();
console.log(lang);


//shift
let firstfruit = fruits.shift();
console.log(firstfruit);
console.log(fruits);


//unshift
let colors = ["red", "blue", "green"];
colors.unshift("yellow");
console.log(colors);
console.log(colors.length);

//splice

let animals = ['Dogs', 'Cats', 'Bear', 'Parrot'];
animals.splice(1,1,'Lion');
console.log(animals);


//slice

let pop = [1,2,3,4,5];
let newpop = pop.slice(1,4);
console.log(newpop);


//concat
let fr =  ["apple","banana","mango"];
let num = [1,2,3,4];
let mixedarray = fr.concat(num);
console.log(mixedarray);

//indexOf

let color = ['red', 'green', 'blue'];
let index = color.indexOf('blue');
console.log(index);


//includes
let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("seller");
console.log(flag);


//for each

let n = [1,2,3,4,5,6,7];
n.forEach((e) =>{
    console.log(e);
});



