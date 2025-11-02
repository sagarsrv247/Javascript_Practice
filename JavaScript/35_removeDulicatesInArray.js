const numbers = [1,2,3,4,4,5,6,7,7,8,9,9,10];
const names = ["Sagar", "Naveen", "Sagar", "Lisa", "Tom", "Tom", "Peter"];

const uniqueNumbers = [...new Set(numbers)];
const uniqueNames = [...new Set(names)];

console.log(uniqueNames);
console.log(uniqueNumbers);
