//1 . var: old way
//ES6 
//scope: var
//functionally/locally }+global scope

var x = 10;  //global scope
function test(){

    var y = 20; //functional scope

}

console.log(x);


var pop = "hi js";

function rel()
{
    var top = "hello javaScript";
    console.log(top);
}

rel();

var browser = "chrome";
var browser = "firefox";
browser = "edge";

console.log(browser);


var g; //undefined


console.log(g);



///issue with var:

var flag = "hey sagar";
var t = 23;
if(t>20)
{
    var flag = "hey srivastava";
}

console.log(flag);


//let
//scope: block scoped
//{}
let m= "hey sagar";
let time = 4;
if(time>3)
{
    let msg = "Hey how are you?";   
    console.log(msg);
}
//console.log(msg);
console.log(m);


let len = 4;
//let len = 3;


//const:
const mg = "hey sagar";
mg = "hey srivastava";
console.log(mg);
