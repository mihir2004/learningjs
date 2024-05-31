let num = Math.floor(Math.random()*100)+1;
console.log(num);
let score = 100;
let newNum = Number(prompt("Guess the number"));
while(newNum!=num){
    if(newNum<num){
        console.log("Guess is small than the number");
        score--;
        console.log(`Chances left ${score}`);
        newNum = Number(prompt("Guess a lower number"));
    }
    else{
        console.log("Guess is greator");
        score--;
        console.log(`Chances left ${score}`);
        newNum = Number(prompt("Guess a higher number"));
    }
}

console.log("Right Guess");
console.log(`Score is = ${score}`);

