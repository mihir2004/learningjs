const apirequest = 'https://api.github.com/users/mihir2004';
const xhr = new XMLHttpRequest();
const getDate = document.querySelector("#getData");
const card = document.querySelector(".card");
getDate.addEventListener('click',(e)=>{
    xhr.open('GET',apirequest);
    xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        card.innerHTML = `Name : ${data.name}
         Avatar : ${data.avatar_url}
         Twitter = ${data.twitter_username}` ;

    }
}
xhr.send();
})

