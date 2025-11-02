//Promise.race() is used to return the promise message whichever completes first irrespective of resolved or rejected status.

//Function that resturns a resolved promise
const resolvePromise = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Resolved!");

        }, 300);
    });

};

//Function that resturns a rejected promise

const rejectPromise = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject("Rejected!");

        }, 500);
    });

};

//Use Promise.race() to see which promise settles first
Promise.race([
    resolvePromise(),
    rejectPromise()
])
.then(result => {
    console.log("Result: ", result);
})
.catch(error => {
    console.log("Error: ", error);
});
