document.getElementById("ageform").addEventListener("submit", function (e) {
    e.preventDefault();     // Stop form reload


    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result")

    if (!dob) {
        result.textContent = "please enter your date of birth";
        return;
    }


    const birthDate = new Date(dob);
    const today = new Date();


    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();


    if (days < 0) {
        months--;
        const prevmonth = new Date(today.getFullYear(), today.getMonth(), 0);

        days += prevmonth.getDate();
    }


    if (months < 0) {
        years--;
        months += 12;

    }

    result.textContent = `you are ${years} years,${months} months ${days} days old`;


});