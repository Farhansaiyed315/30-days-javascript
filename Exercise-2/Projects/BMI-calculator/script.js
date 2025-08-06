const heightInput = document.getElementById("height");

const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("Calculate");

const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {

    const height = parseFloat(heightInput.value);

    const weight = parseFloat(weightInput.value);


    if (!height || !weight || height <= 0 || weight <= 0) {

        result.textContent = "Please enter a valid input!";
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    const bmiRounded = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {

        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
    }
    else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }


    result.textContent = `Your BMI is ${bmiRounded} (${category})`;
});

