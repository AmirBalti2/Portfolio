const userName=document.querySelector("#name");
const userEmail=document.querySelector("#email");
const message=document.querySelector("#message");
const sucess=document.querySelector("#succes");
const err=document.querySelectorAll(".error")


// function vilaiadtion
function validateForm(){
   clearMessage();
   let errFlag=false;
    if(userName.value.length < 1){
        err[0].innerText="Cannot enter the name";
        userName.classList.add(".error-border");
        errFlag=true;
    }
    if(!emailIsValid(userEmail.value)){
        err[1].innerText="invailded email";
        userEmail.classList.add(".error-border");
        errFlag=true;
    }
    if(message.value.length<1){
        err[2].innerText="Enter the message";
        message.classList.add(".error-border");
        errFlag=true;
    }
    if(!errFlag){
        sucess.innerText="sucessful";
    }

}
function clearMessage(){
    for(let i=0; i<err.length;i++){
        err[i].innerText=" ";
    }
    sucess.innerText="";
    userName.classList.remove("error-border");
    userEmail.classList.remove("error-border");
    message.classList.remove("error-border");
}
function emailIsValid(userEmail){
    let pattern=/\S+@\S+\.\S+/gm;
    return pattern.test(userEmail);
}