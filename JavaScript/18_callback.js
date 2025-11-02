//callback function
//async call/task -- once this task is comleted, then only callback function will be called

//basic callback
function greet(name, callback){
    console.log('Hello '+name);//normal/sync ste/task
    callback();
}

//callback function
function welcome(){
    console.log('welcome!!');
}

greet('Sagar', welcome);


//callback with async function:

function printInfo(name, callback){
    //async function/task/step
    setTimeout
    (
        function()
        {
            console.log("printing info for "+name);
            callback("Plz call me back..");
        },5000 //delay of 5 seconds
    );

}

//callback function

function displayMessage(mesg){
    console.log(mesg);

}

printInfo("Lisa", displayMessage);




//2nd example
function fetchUserData(userId, callback){
    setTimeout(function(){
        const users = { 
            1 : {id: 1, name: "Naveen"},
            2 : {id: 2, name: "Sagar"}
        };

        const user = users[userId];
        if(user){
            callback(null, user);
        
        }
        else{
            callback("User not found..", null);
        }

    }, 7000);
}

//callback function

function handleUserData(error, user){

    if(error){
        console.error("Error:", error);
    }
    else{
        console.log("User: ", user);
    }
}

fetchUserData(2, handleUserData);