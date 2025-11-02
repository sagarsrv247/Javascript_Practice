const fetchUserInfo = async() =>{
    const response = await fetch('https://reqres.in/api/users?page=2');

    if(!response.ok){
        throw new Error('User data not found.');
    }

    //parse the json response
    const userData = await response.json(); //async step

    console.log(userData);
}

//call the function
fetchUserInfo();