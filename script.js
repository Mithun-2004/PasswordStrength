let password = document.querySelector('#password');
let msg = document.querySelector('#msg');
let image = document.querySelector('#image');

password.addEventListener('input', function(){
    if (password.value != ""){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if (password.value.length > 0 && password.value.length <= 4 ){
        msg.innerText = "Password is Weak";
        password.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }else if (password.value.length > 4 && password.value.length <= 8){
        msg.innerText = "Password is Medium";
        password.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }else if (password.value.length > 8){
        msg.innerText = "Password is Strong";
        password.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }else{
        password.style.borderColor = "#fff";
    }
})

image.addEventListener('click', function(){
    password.value = "";
    password.style.borderColor = "#fff";
    msg.style.display = "none";
})