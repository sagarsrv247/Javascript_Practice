//Async-await is the modern way of handling async calls.
//Used with promises.
//async is a keyword used with a function
//await keyword/operator used with the async steps.
//await keyword cannot be used without async function.

/*
//1)async function without await.
async function f1(){
    console.log("This is async function without await step");
    return 42; //return a resolved promise on top of 42
}
/*
f1()
    .then(result =>{
        console.log(result);
    });

    */

/*
// 2)async function without await but with error

async function f2(){
    console.log("This is async function with error");
    throw new Error("This is my error"); //will return a rejected promise
}
f2()
    .catch(error =>{
        console.log(`the error message: ${error}`);
    });

*/


// 3) async function with a resolved/rejected promise

function getInfo()
{
    return new Promise((resolve, reject) =>{

        const rand = Math.random();
        setTimeout(() =>{
            if(rand < 0.5){
                resolve(42);
            }
            else{
                reject(new Error("Wrong value error"));
            }
        }, 5000);
    })
}

//create async function which is calling getInfo()
async function getNumberInfo(){
    try{
        const result =  await getInfo();
        console.log("result: ", result);
    }
    catch(error){
        console.group("Error: ", error);
    }
}

//call getNumberInfo():
getNumberInfo();