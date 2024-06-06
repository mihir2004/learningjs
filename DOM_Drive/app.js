let confirmation = true;
let color = prompt("Enter color you would like the page to be in");
    document.querySelector("body").style.background=color;
let check = (age)=>{
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
while(confirmation){
    let age = Number.parseInt(prompt("Enter your age"));
    if(age<0){
        console.error("Age cannot be negative");
        break;
    }
    // if(age>4){
    //     location.href=("https://www.google.com/");
    //     break;
    // }
    if(check(age)){
        alert("Yes you can drive");
    }
    else{
        alert("No you cant drive little kiddo")
    }
    confirmation = confirm("Do you want to play again");
    
}

