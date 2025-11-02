//1) Object Literals: {}

const user = {

    name: 'michael',
    age:  25,
    country : 'USA',
    Occuation : 'Engineer'

};

console.log(user.name);
console.log(user.Occuation);


//2 Constructor function:

function car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
};

const c1 = new car("BMW", "520D", 10000);
console.log(c1.brand);
console.log(c1.model);



//3 Class style:

class Customer{

    constructor(name, product){ //local variable
        this.name = name; //Instance variable
        this.product = product;

    }

    addToCart(){
        console.log(`${this.name}'s ${this.product} added to the cart` );
    }
}

//creating the object of the class
const cust1 = new Customer("Naveen", "Apple Macbook Pro");
console.log(cust1.name);
cust1.addToCart();


//4. Object.create(): with some prototype object.

const emloyeePrototype = {

    printInfo: function(){
        console.log(`hello, emp name is ${this.name}`);
    }
};

const e1 = Object.create(emloyeePrototype);
e1.name = 'Tom';
e1.printInfo();

//5. using Factory function: returns an object.

function createDepartment(deptName, hod)
{
    return{
        deptName : deptName,
        hod: hod,
        getDeptInfo: function(){
            console.log(`hello, dep name is ${this.deptName} and hod is ${this.hod}`);
        }
    }
}

const dept1 = createDepartment("Physics", "H C Verma")
const dept2 = createDepartment("Maths", "R C Sharma")
dept1.getDeptInfo();
dept2.getDeptInfo();