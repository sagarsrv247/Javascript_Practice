//constructor overaloading is not allowed in JS.

class car{

    constructor(name, price, model, color)
    {
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }
    refuel()
    {
        console.log("The car is refueled.");
    }
}

//new keyword: to create the object
const c1 = new car("BMW", 100, "520d", "Black");
console.log(c1.name);
console.log(c1.model);
c1.refuel();

