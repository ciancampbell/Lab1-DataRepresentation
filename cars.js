class Vehicle
{
    constructor(make,model, year){
        this.make = make; //Assigning from constructor to local variable
        this.model = model;
        this.year = year;
    }//constructor

    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }//vehicleDetail method
}//class

// let myVehicle = new Vehicle('VW', 'Golf', 2000); //Assigning values
// myVehicle.Information();

class Cars extends Vehicle{ //extends allows you to take from the parent class
    constructor(make,model, year, doors){
        super(make,model,year)//Super key word takes from the parent constructor
        this.doors = doors;
    }
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
} 

let myCar = new Cars('VW', 'Golf', 2020, 5);
myCar.Information();




