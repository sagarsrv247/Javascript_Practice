//Promises are a away to handle asynchronous operations in a more organized and readable manner.
//It can be of three states: pending, fulfilled or rejected.
//Once promise is fulfilled or rejected, it is considered settled and its state cannot change.
//Promises use .then() and .catch() methods to specify callbacks for when the promise is fulfilled or rejected.
//Promises can easily be chained using .then() and .catch() methods.

const randomNumberPromise = 
new Promise((resolve, reject) => {

    //async oeration:
    setTimeout(() => {
        const randomValue = Math.random();
        if(randomValue>0.5){
            resolve(randomValue);
        }
        else{
            reject(new Error("Value is too small"));
        }
        
    }, 2000);//delay of 2 seconds

});


randomNumberPromise
    .then(result =>{ //handler
        console.log("Promise is fulfilled with a value: ", result);
    })
    .catch(error =>{ //handler
        console.error("Promise is rejected with error: ", error);
    });

