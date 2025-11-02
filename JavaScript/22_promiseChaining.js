function getEvenNumber(value, delay){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {

            if(value%2 == 0){
                resolve(value);
            }
            else{
                reject(new Error("value is not even number"));
            }
            
        }, delay);
    });
}
// promise chain:

getEvenNumber(4, 1000)
    .then(result =>{
        console.log("Step 1: Getting the result with even number: ", result);
        return getEvenNumber(7, 2000);
    })
    .then(result =>{
        console.log("Step 2: Getting the result with even number: ", result);
    })
    .catch(error =>{
        console.error("Promise chain error : ", error.message);
    });