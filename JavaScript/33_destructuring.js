//Supplying the array/object values to a variable is called destructuring.



//array:

const numbers = [1,2,3,4,5]; // if more values then only intial values will be used.
const [a,b,c] = numbers; //array destructuring is done with square brackets.
console.log(a);
console.log(b);
console.log(c);


//using spread operator
const lang = ['Java', 'Javascript', 'Python', 'Ruby', 'Go'];
const[p,q, ...testlang] = lang;//array destructuring is done with square brackets.
console.log(p);
console.log(q);
console.log(testlang);

//object:
const user ={
    firstName : 'Tom',
    lastName : 'Smith',
    age: 30
}

const {firstName, lastName, age, city="LA"} = user; //object destructuring is done in curly brackets.
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);



//function parameters:


//without destructuring
function printUserName(person){
    console.log(person.firstName+' '+person.lastName);

}

const person={
    firstName: 'John',
    lastName: 'Doe'
};

printUserName(person);

//with destructuring

function printUserName1({firstName, lastName}){
    console.log(firstName+' '+lastName);

}

const person1={
    firstName: 'James',
    lastName: 'Lebron'
};

printUserName1(person1);