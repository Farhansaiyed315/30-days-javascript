console.log("Functions level 1 ");


//! Declare a function fullName and it print out your full name.

function Fullname () {
    console.log("Farhan saiyed");
    
}

Fullname()


//! Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name

function Fullname2(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(Fullname2("Farhan", "Saiyed"));


//! Declare a function addNumbers and it takes two two parameters and it returns sum.

function Sum(a, b) {
    return a + b;
}

console.log(Sum(10, 12)); 


//! An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle

function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(5, 3));


//! A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 3)); 


//! A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism


function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

console.log(volumeOfRectPrism(5, 3, 2)); 



//! Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

console.log(areaOfCircle(5)); 



//! Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
}

console.log(circumOfCircle(5)); 

//! Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function calculateDensity(mass, volume) {
    return mass / volume;
}

console.log(calculateDensity(10, 2)); 



//! Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(distance, time) {
    return distance / time;
}

console.log(calculateSpeed(100, 2)); 



//! Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight

function calculateWeight(mass, gravity) {
    return mass * gravity;
}

console.log(calculateWeight(10, 9.8)); // Output: 98


//! Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function calculateWeight(mass, gravity) {
    return mass * gravity;
}

console.log(calculateWeight(10, 9.8)); 




//! Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer

function checkSeason(month) {
    if (['December', 'January', 'February'].includes(month)) {
        return 'Winter';
    } else if (['March', 'April', 'May'].includes(month)) {
        return 'Spring';
    } else if (['June', 'July', 'August'].includes(month)) {
        return 'Summer';
    } else if (['September', 'October', 'November'].includes(month)) {
        return 'Autumn';
    } else {
        return 'Invalid month';
    }
}

console.log(checkSeason('March')); 
console.log(checkSeason('July')); 


//! Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
//! console.log(findMax(0, 10, 5)) 10
//! console.log(findMax(0, -10, -2)) 0

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(0, 10, 5));  
console.log(findMax(0, -10, -2));



//! BMI wala bacha hai. 

