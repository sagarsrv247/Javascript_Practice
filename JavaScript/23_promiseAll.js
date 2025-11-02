//Promise all will return all the data if all the promises are resolved, else it will only print the rejected error.
//Promise all is used to collect and return all the promise data together in one go.

//case 1.
// f1 - resolve
// f2 - resolve
// f3 - resolve

const function1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data from function 1");
        }, 2000);
    });
};

const function2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data from function 2");
        }, 2000);
    });
};

const function3 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data from function 3");
        }, 2000);
    });
};


Promise.all([function1(),
            function2(),
        function3()])
        .then(dataArray => {
            console.log("All data from different functions: ", dataArray);
        })
        .catch(error =>{
            console.log('Error in promise', error);
        });


//case 2
// f1 - resolved
// f2 - rejected

const getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data from getData");
        }, 2000);
    });
};

const getError = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("Error: Data is not available from getError");
        }, 2000);
    });
};


Promise.all([getData(),
            getError()
])
.then(dataArray =>{
    console.log("All data fetched: " + dataArray);
})
.catch(error =>{
    console.log("Error occured: ", error);
});
