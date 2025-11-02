
//no parameter arrow function

const msg = () => 'Hello JS!'
console.log(msg());

// one parameter arrow function

const square = num => num*num;
const result = square(5);
console.log(result);


//multiple parameter arrow function

const add = (a,b) => a+b;
console.log(add(4,5));


//object paramenter arrow function

const getFullName = person => `${person.firstName} ${person.lastName}`;

const person = {
    firstName: 'Naveen',
    lastName: 'Automation labs'
}

const fullName = getFullName(person);
console.log(fullName);



//default parameters arrow function
const greet = (username='guest', age=0) => `Hello  ${username}! you are ${age} years old.`;
const g1 = greet();
console.log(g1);

const g2 = greet('Tom', 30);
console.log(g2);

//rest parameters - ...varargs

const sum = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
const total = sum(1,2,3,4,5);
console.log(total);


const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`browser: ${browser}`);
    console.log('Other details: ', details);
};

browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');



//max number using Math

const findmaxVal = (a, b, c) => {
   return Math.max(a,b,c);
};

console.log(findmaxVal(10,30,50)
);
