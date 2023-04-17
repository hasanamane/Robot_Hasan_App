let setings = document.querySelector(".setings");
let card    = document.querySelector(".card");
let send    = document.querySelector("#send");
let form    = document.querySelector("form");
let inputMessage = document.querySelector("#message");
let chatArea = document.querySelector("#chat-area")
setings.addEventListener("click",function(){
 card.classList.toggle("active");
});

async function getBotAnswer(){
    const rersponsText = await fetch("bot_answer.json");
    const data = await rersponsText.json();
    

form.onsubmit = (e) => {
    e.preventDefault();
    let inputMessages = inputMessage.value.trim();
    if(inputMessages === ""){
        alert("Plasse Enter Message !!");

    }else{
        data.forEach(answer => {
            if(inputMessages === answer.my_msg){
                console.log(chatArea.innerHTML);
                chatArea.innerHTML +=`<p class="msg">${answer.my_msg}</p>`;
               setTimeout(function(){
                chatArea.innerHTML +=`<p class="answer">${answer.bot_answer}</p>`;
               },2000);
            }
        });
    }
    inputMessage.value="";
}
}
getBotAnswer();