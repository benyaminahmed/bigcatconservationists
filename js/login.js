const pwd = "ch153n";
const wrongPassword = document.getElementById('wrongPassword');
wrongPassword.style.display = "none";

function onSubmit() {
    const password = document.getElementById('password').value;
    if(password === pwd) {
     window.location.href = "./index.html";
    }
    else {
        wrongPassword.style.display = "";
    }
}