
//Different ways of declaring a function.

//1) function declaration:
function add(a,b)
{
    return a+b;

}

console.log(add(6,5));

function print()
{
    console.log("This is JS.");
}
print();



//2) function expression - Anonymos function.

const multiply = function(x,y)
{
    return x*y;
};
console.log(multiply(2,4));


//3) arrow function expression:

const divide = (t1,t2) => t1/t2;
console.log(divide(4,2));


//4) function constructor

const subs = new Function('a', 'b', 'return a - b;');l

console.log(subs(4,1));

//5) IIFE (Immediately Invoke Function Expression) - no need to call the function. Called automatically.

(function(){
    console.log("The server is up and running");
})();


//6) Generator function - generates a sequence of values

function* generate_numSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;

};
const gen = generate_numSequence();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// 7) Anonymous function - No specific name

const numbers = [1,2,3,4,5];
const square = numbers.map(function(e){
    return e*e;
});

console.log(square);



// 8) recursive function

function factorial(n)
{
    if(n===0 || n===1)
        {
            return 1;
        }
        else{
            return n *factorial(n-1);
        }
}

console.log(factorial(4));



// 9)higher order function

function addition(a,b){
    return a+b;
}

function operate(funcName, a, b){
    funcName(a,b);
}

console.log(operate(addition(4,5)));
