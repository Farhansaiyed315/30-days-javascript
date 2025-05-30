const countvalue = document.getElementById('count')

const increaseBtn = document.getElementById('increase')

const ResetBtn = document.getElementById('Reset')

const DecreaseBtn = document.getElementById('Decrease')

// initial value 

let count = 0;

increaseBtn.addEventListener('click', () => {
    count++;
    countvalue.textContent = count
});

DecreaseBtn.addEventListener('click', () => {
    count--;
    countvalue.textContent = count
});

ResetBtn.addEventListener('click', () => {
    count = 0;
    countvalue.textContent = count
});