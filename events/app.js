const time = document.querySelector(".time");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

// setTimeout(
//     ()=>{
//         console.log("Mihir");
//     },2000
// )
// setInterval(()=>{
//     let date = new Date();
//     time.innerHTML = date.toLocaleString();
// },1000);
start.addEventListener('click',(e)=>{
  let interval =  setInterval(()=>{
        console.log((new Date()).toLocaleString());
   },1000);

   stop.addEventListener('click',(e)=>{
        clearInterval(interval);
   });
});





