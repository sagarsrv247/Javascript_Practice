//map

let numbers = [1,2,3];
let double_numbers = numbers.map((e) => e*2 );
console.log(double_numbers);


let fahtemp = [32, 4,46,57,75];
function fahtoCel(fah)
{
    return (fah-32)*(5/9);
    
}


let celtemp = fahtemp.map(fahtoCel);
console.log(celtemp);




//filter

let num = [1,2,3,4,5,6];
let evenNum = num.filter((e) => e%2 === 0);
console.log(evenNum);

let employee = [

    {name:"John", age:30, gender:"male"},
    {name:"Bob", age:35, gender:"male"},
    {name:"Lisa", age:40, gender:"female"},
    {name:"Priya", age:25, gender:"female"}
];


let femaleEmpOver30 = employee.filter((emp)=>{

    return emp.gender === "female" && emp.age >30
});

console.log(femaleEmpOver30);



//reduce

let numb = [1,2,3,4,5];
let sum = numb.reduce((acc,num) => acc+num, 0);
console.log(sum);


let top = [23,56,34,67,35,56,4,67,56];
let maxNum = top.reduce((max,num) =>{
if(num>max){
    return num;
}
else
{
 return max;
}

}, top[0]);

console.log(maxNum);


let cartItems = [
    {name:"Jeans", price:500},
    {name:"Shirts", price:430},
    {name:"Shoes", price:870},
    {name:"Hats", price:344},
    {name:"Tshirts", price:672}
];

let totalCost = cartItems.reduce((total, item) => total+item.price, 0);
console.log(totalCost);

