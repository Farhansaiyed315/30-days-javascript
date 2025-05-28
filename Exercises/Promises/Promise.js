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



promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Farhan', eamil: 'Email@example.com' })

    }, 3000)
})

promiseThree.then(function (user) {
    console.log(user);


})
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;                         // error ek baar true aur ek baar false karke check karna hoga 
        if (!error) {
            resolve({ username: "Farhan", password: "8001902" });
        } else {
            reject("Error something went wrong");
        }
    }, 3000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected.")
    )




    