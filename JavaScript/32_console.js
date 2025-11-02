
/*
console.log("Hello world!");//will be printed in blue
console.error("array error"); //will be printed in red
console.warn("Warning!");//will be printed in red
console.info("This is my JS code");//will be printed in blue

*/

const user1 ={
    name: 'John',
    age: 34,
    city: 'Bangalore',
    country: 'India'
};


const user2 ={
    name: 'Lisa',
    age: 35,
    city: 'Chennai',
    country: 'India'
};


// console.log(user1);
console.table({user1, user2}); // will give the output in tabular format


// Group method - to group a set of information under a heading.
console.group("Login feature");
console.log("reset pwd");
console.log("error login msg");
console.log("enter username/password");
console.groupEnd();



// time method to check the amount of time to do a task.
console.time("print 1 to n values");
for(let i =1;i<=10000;++i)
{
    console.log(i);
}
console.timeEnd("print 1 to n values");


console.clear(); // to clear the console

//count is used to check the number of count statements used
console.count("reset");
console.count("reset");
console.count("reset");
console.count("reset");

console.clear();


//to assert values
console.assert(10===12, "This is failed");


/*
//trace method
function testMyJob(){
    console.trace();

}
testMyJob();
*/

//css selector
console.log("%c I love JavaScript!", 
    "color:red; background-color:green; border:solid"
);