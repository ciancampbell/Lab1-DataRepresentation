class BMI //Class
{
    constructor(height, weight){
        this.height = height; //Variables 
        this.weight = weight;
    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2); //This dose all the calculations
        return bmi;
    }//CalculateBMI method
}//class

let myBMI = new BMI(2,90); //Passes in height and weight
let calc = myBMI.calculateBMI();//Getting back the BMI
console.log(calc);