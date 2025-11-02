//typeof is used to check the datatye of the constant at the runtime.

let x = 30;
console.log(typeof x);
x = "Hello";
console.log(typeof x);
x = {
    name: 'john'
}
console.log(typeof x);


let flag = true;
console.log(typeof flag);


//typeof variable is a string.
let type = typeof flag;
console.log(typeof type);


const arr = [1,2,3,4,5];
console.log(typeof arr);


const j = null;
console.log(typeof j);


let y;
console.log(typeof y);



function print(name){
    console.log("My name is "+name);
}

console.log(typeof print); 