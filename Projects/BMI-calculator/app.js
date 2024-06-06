const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height == "" || height<=0 || isNaN(height)){
        result.innerHTML = "Please enter a valid Height Input";
    }
    else if(weight == "" || weight<=0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid Weight Input";
    }
    else{
        let bmi = (weight/(height*height))*Math.pow(10,4);
        bmi = bmi.toFixed(2);
        if(bmi>=24.9){
            result.innerHTML = `BMI ${bmi}, Overweight`;
        }
        else if(bmi>18.6){
            result.innerHTML = `BMI ${bmi}, Normal`;
        }
        else{
            result.innerHTML = `BMI ${bmi}, Underweight`;
        }
    }
});