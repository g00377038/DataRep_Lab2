//create "Vehicle" class
class Vehicle
{
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //output vehicle details to screen
    Information()
    {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

//create child "Cars" class
class Cars extends Vehicle
{
    constructor(make, model, year, doors)
    {
        //inherit vehicle details
        super(make, model, year);
        this.doors = doors;
    }

    //extend functionality of Information()
    Information()
    {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//create instance of "Cars" class
let myCar = new Cars("VW", "Golf", 2008, 4);

//invoke extended Information() method
let info = myCar.Information();
