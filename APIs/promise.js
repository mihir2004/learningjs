const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
})

promiseOne.then(()=>{
    console.log('Promise 1 resolved');
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('promise two async task');
        resolve();
    }, 1000);

}).then(()=>{
    console.log('promise 2 resolved');
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:'Mihir', email:'mihir@example.com'})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:'Mihir2', email:'Mihir2@example.com'})
        }
        else{
            reject('Error')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Error may be resolved");
});

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:'Mihir3', email:'Mihir3@example.com'})
        }
        else{
            reject('This is catch Error')
        }
    }, 1000);
})


async function promiseFiveResolver(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
} 

promiseFiveResolver();


// async function getUserData(){
//     try {
//         let data = await fetch('https://api.github.com/users');
//         data = await data.json();
//         console.log(data);
    
//     } catch (error) {
//         console.log('E: ', error);
//     }
 
// }

// getUserData();

fetch('https://api.github.com/users/mihir2004')
.then((response)=>{
    return response.json();
    
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

