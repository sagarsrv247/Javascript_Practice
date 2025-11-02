//1 Find unique values from array.
//... is called spread operator

const array = [1,2,3,4,5,3,2,5,6,7,8];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);


//2 Convert int to String.
const num = 32;
const numStr = num+'';  //converted to string
const numStr2 = String(num); // 2nd way to convert to string
console.log(numStr+10);
console.log(typeof numStr);


//3 Convert float to int
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);


//4 Check if a variable is num
const value = 45;
if(typeof value === 'number' && !isNaN(value))
{
    console.log(value+" is number");
}
else{
    console.log(value+" is not a number");
}

//5 Swap variable values

let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(a,b);

//6 Check if an object has a property
const person ={
    name : 'John',
    age: 28
}
if(person.hasOwnProperty('name'))
{
    console.log('Person has name property');
}


//7 Remove falsy values from the array: (false, 0 , "", null, undefined, NaN)
const values = [0,1,false,2,'',3, null, undefined, NaN, 4];
const newVal = values.filter(Boolean);
console.log(newVal);

//8 String -> Uppercase, Lowercase
const str = "Sagar Srivastava";
const u1 = str.toUpperCase();
const l1 = str.toLowerCase();
console.log(u1);
console.log(l1);

//9 Check if array contains specific value
const lang = ['Java', 'Javascript', 'Python'];
if(lang.includes('Javascript'))
{
    console.log('The value is found');
}

//10 Check if the array is empty
const empty = [];
if(empty.length === 0){
    console.log("Array is empty");
}

//11 Generate a random number
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random()*(max-min+1))+min;
console.log(`Random number: ${randomNumber}`);

//12 String to number
const strNumber = '32.3';
const x1 = parseFloat(strNumber);
console.log(x1);
const x2 = parseInt(strNumber);
console.log(x2);

//13 Join array elements into a string
const words = ['Hello', 'World'];
const sen = words.join(' ');
console.log(sen);

//14 Get object property
const user = {
    name: 'Tom',
    age: '26',
    dob: '01-01-1998'
};
console.log(user['name']);
console.log(user['dob']);

//15 Clone an array or object
const marks = [10,20, 30, 60, 89];
const marksdulicate = [...marks];
console.log(marksdulicate);

const userduplicate = {...user };
console.log(userduplicate);

//16 Convert object to array
const employee = {
    name: 'Tom',
    age: '26',
    dob: '01-01-1998'
};

const keys = Object.keys(employee);
console.log(keys);
const valuesarr = Object.values(employee);
console.log(valuesarr);
const keyvaluearr = Object.entries(employee);
console.log(keyvaluearr);

//17 Get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleString());

//18 Check if variabe is defined or not
let i;
if(typeof i === 'undefined'){
    console.log('variable is not defined');
}

//19 truncate an array
const testing = [0,1,2,3,4,5,6,7];
testing.length = 3;
console.log(testing);

//20 last item in an array:

const pop = [0,1,2,3,4,5,6,7];
const n1 = pop.slice(-1);
console.log(n1);