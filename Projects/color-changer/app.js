const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(button);
for (buttons of button){
    buttons.addEventListener("click",(e)=>{
        body.style.backgroundColor = e.target.id;
    })
}