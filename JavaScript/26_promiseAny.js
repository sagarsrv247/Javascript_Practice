//Promise.any() -  id used for handling multiple promises and resolving with the value of the first resolved promise.
//however, unlike Promise.race(), it doesnt reject immediately when the first promise rejects;
//instead, it waits until at least one promise fulfills/resolved.

const getMessage = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Get message from API 1");

        }, 500);
    });

};

const getUsers = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject("Error: User data could not be fetched");

        }, 200);
    });

};

const getProducts = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject("Error: Product info could not be fetched");

        }, 1000);
    });

};

Promise.any([
    getMessage(),
    getUsers(),
    getProducts()
])
.then(result =>{
    console.log("First successful result: ", result);
})
.catch(errors =>{
    console.error("All promises got rejected", errors);
});
