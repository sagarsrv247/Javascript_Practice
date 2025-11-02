//template literals are defined by backticks ``. This is used to include variables in the data.
const name = "Sagar";
const age = 30;
const msg = `Hello! My name is ${name} and my age is ${age}`;
console.log(msg);



//writing paragraphs
const multiline = `Hi! This is my Javascipt code
and I'm very happy
and I want to learn automation`;

console.log(multiline);

//mathematical expressions:
const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} = ${a+b}`;
console.log(result);


//function parameters
function getXpath(name)
{
    return `//input[@id='${name}']`;
}
console.log(getXpath('Sagar'));