//Inheritance is possible in Js.
//Multiple Inheritance is not allowed in Js. Only one parent class is allowed.
//Multi level Inheritance is allowed. Grand children are allowed
//A parent class can have n number of child classes.


//parent clas of below super class(multi level inheritance)

class Automobile{
    constructor(chasisNumber){
        this.chasisNumber = chasisNumber;
    }
    useAeroDynamic()
    {
        console.log("Automobile is aerodynamic "+this.chasisNumber);
    }
}


//parent(super class)

class Vehicle extends Automobile{

    constructor(make, model, year){
        super(1000);
        this.make = make;
        this.model = model;
        this.year = year;

    }

    getInfo(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    startEngine(){
        console.log('Starting engine '+this.make);
    }
    stopEngine(){
        console.log('Stoping Engine');
    }

}

//child(sub class)

class Car extends Vehicle{

    constructor(make, model, year, fuelType){
        super(make, model, year); // call the parent class constructor
        this.fuelType = fuelType;

    }

    driverCar()
    {
        console.log('driving the car '+this.model+" fuel type "+this.fuelType);
    }


}

//child (sub class)

class Truck extends Vehicle{

    constructor(make, model, year, loadingCapacity){
        super(make, model, year); // call the parent class constructor
        this.loadingCapacity = loadingCapacity;

    }

    driverTruck()
    {
        console.log('driving the truck '+this.model+ " capacity : "+this.loadingCapacity);
    }
}

//creating the objects with the help of new keyword.

const car = new Car("Honda", "City", 2024, "Petrol");
const truck = new Truck("Tata", "Sumo", "2020", 100);


//calling the functions of the parent class

car.startEngine();
console.log(car.getInfo());
car.driverCar();
car.useAeroDynamic();
console.log(car.chasisNumber);

truck.startEngine();
console.log(truck.getInfo());
truck.driverTruck();
truck.useAeroDynamic();
console.log(truck.chasisNumber);
