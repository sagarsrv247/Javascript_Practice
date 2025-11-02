class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;

    }
    startEngine(){
        console.log('Starting engine... for the car');
    }

}
class Audi extends Car{
    //overridden method
    startEngine(){
        console.log('Starting engine... for the Audi');
    }
    autoParking(){
        console.log('Audi auto parking');
    }

}


const audi = new Audi();
audi.startEngine(); //prefernce will be given to the overriding method always.
audi.autoParking();