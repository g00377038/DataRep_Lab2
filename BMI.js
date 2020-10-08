//create BMI class
class BMI
{
    //constuctor that takes "height" & "weight" as arguements
    constructor(height, weight)
    {
        this.height = height;
        this.weight = weight;
    }

    //calculate BMI using given formula
    calculateBMI()
    {
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//create instance of "BMI" class
let myBMI = new BMI(2, 90);

//invoke method to calculate BMI
let calculatedBMI = myBMI.calculateBMI();

//output calculated BMI to screen
console.log(calculatedBMI);