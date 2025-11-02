function reverseNumber(num)
{
    if(num>=0 && num<=9)
    {
        return num;
    }
    let reverseNum =0;
    while(num!=0)
    {
        reverseNum = reverseNum*10+ (num%10);
        num = Math.floor(num/10);
    }

    return reverseNum;
}

console.log('Reverse Number is', reverseNumber(1065));