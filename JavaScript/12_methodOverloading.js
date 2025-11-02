//Method overloading is not possible in JS.

function print(){

    console.log("Hi");
}
function print(name)
{
    console.log("Hi "+name);
}

function print(name, age)
{
    console.log("Hi "+name+ " age : "+age);
}
print(); //latest function will be called only that is the third one.
print("Naveen", 20);


//Run testcases on remote machine
//It requires 3 data - browserName, browserVersion, remoteExecution

function dislayBrowserInfo(browserName, browserVersion, remoteExecution)
{
    if(typeof browserVersion === 'number' && typeof remoteExecution ==='boolean')
    {
        console.log(`Browser: ${browserName}, 'version:' ${browserVersion}, 'remoteExec' : ${remoteExecution}`);
    }
    else if(typeof browserVersion ==='number')
    {
        console.log(`Browser: ${browserName}, 'version: ' ${browserVersion}`);
    }
    else
    {
        console.log(`Browser: ${browserName}`);
    }

}
dislayBrowserInfo('chrome', 115, true);
dislayBrowserInfo('chrome', 115);
dislayBrowserInfo('chrome');