//every

let num = [1,2,3,4,5];
let flag = num.every((e) => e<10);
console.log(flag);


//some
let number = [1,2,3,4,5];
let fg = number.some((e) => e%2 ==0);
console.log(fg);


//find
let total = [1,2,3,7,9];
let fe = total.find((e)=> e%2===0);
console.log(fe);

//indexOf
let arry = ['apple', 'banana', 'pear','mango', 'pear'];

let index = arry.indexOf('mango');
console.log("index of mango: "+index);


//lastIndexOf

let last_pear = arry.lastIndexOf('pear');
console.log('last index of pear : '+last_pear);


//reverse

let rev_arr = arry.reverse();
console.log(rev_arr);

//sort
let products = ['macbook', 'apple', 'samsung', 'blackberry'];
let sorted = products.sort();
console.log(sorted);

