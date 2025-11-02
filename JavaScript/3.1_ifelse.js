function checkAge(age)
{
    if(age>=18)
    {
        console.log("You are eligible to vote");
    }
    else{
        console.log("Sorry you are not eligible to vote")
    }
}

checkAge(19);


function checkNumber(number)
{
    if(number>0)
    {
        console.log("Number is positive");
    }   
    else if(number<0)
    {
        console.log("Number is negative");
    }
    else
    {
        console.log("Number is 0");
    }

}


checkNumber(-87);
