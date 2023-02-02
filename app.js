const btn = document.getElementById("submit");
const email = document.getElementById("email");
const message = document.querySelector(".error-message");
const pattern = /^[A-Za-z0-9._+-]+[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;


btn.addEventListener("click", () => {
    if(email.value === "" || !pattern.test(email.value)){
        message.style.display = "block";
        message.textContent = "Please provide a valid email address";
        message.style.color = "hsl(354, 100%, 66%)";
        email.style.borderColor = "hsl(354, 100%, 66%)";
    }
    else {
        message.style.display = "block";
        message.style.color = "green";
        message.textContent = "Valid login";       
        email.style.borderColor = "hsl(223, 100%, 88%)";
    }
});