console.log();


console.log("promises");

const PromiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async is completed');
        resolve(); // resolve the promise after 2 seconds
    }, 2000);
});

// Consume the promise
PromiseOne.then(function () {
    console.log("Promise consumed");
});


new Promise(function (resolve, reject) {
    setTimeout(function () {
console.log("Async task two");
resolve()
    }, 2000)
}) .then(function(){
    console.log("Async two resolved");
    
})
