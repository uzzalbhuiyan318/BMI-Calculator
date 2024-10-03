// get height by id
function bmiCalculate(){

    //getting height float number
    const heightInput = document.getElementById("height").value;
    const heightValue = parseFloat(heightInput);
    console.log(heightValue);

      //getting weight float number
    const weightInput = document.getElementById("weight").value;
    const weightValue = parseFloat(weightInput);
    console.log(weightValue);

    // BMI result calculation
    const bmiResult = weightValue/(heightValue * heightValue);
    //console.log(bmiResult);
    const bmiFinalResult = bmiResult.toFixed(2);


    let showBmiResult = document.getElementById("calculatedBMI");
    let displayValue = showBmiResult;
    displayValue.value = bmiFinalResult;
    console.log("working", displayValue.value);

    if(displayValue.value >= 17  && displayValue.value <18.5 ){
        const healthStatus = document.getElementById("health-status");
        healthStatus.innerHTML = 
        `
        <span style="color: red"><b>fit</b></span>
        `
    }
    else if(displayValue.value >=18.5 && displayValue.value <25){
        const healthStatus = document.getElementById("health-status");
        healthStatus.innerHTML = 
        `
        <span style="color: red"><b>Unfit</b></span>
        `
        ;

    }




}
// function bmiHeight(){
//     const heightInput = document.getElementById("height").value;
//     const heightValue = parseFloat(heightInput);
//     console.log(heightValue);
// }